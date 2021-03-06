// modulos/liberías
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const request = require('request');
const logger = require('koa-logger-middleware');

//Clases
const pandemium = require('./class/pandemiun.js')
var port = process.env.PORT || 8081;

//instancias
const app = new Koa({});
const router = new Router();


// Set up body parsing middleware
app.use(koaBody());
app.use(logger());

//Definimos rutas
router.get('/api/:provincia/:fecha', (ctx, next) => {

    ctx.body = pandemium.getDatos(ctx.params.provincia,ctx.params.fecha);
    ctx.response.status = 200;
    ctx.response.type = "application/json";

    if( !ctx.body["fecha"] ){
        ctx.response.status = 404;
		ctx.body = {
			status: 'Error!',
			message: ctx.body
        };
       
        ctx.__logInfo = {
            status : ctx.response.status,
            header : ctx.response.header,
            path: ctx.request.url,
            body : ctx.body
        };
    }

	next();
});

//Definimos rutas
router.put('/api', (ctx, next) => {

    let nick = ctx.request.body.nick;
    let provincia = ctx.request.body.provincia;
    let estado = ctx.request.body.estado;

    ctx.body = pandemium.updateDatos(nick,provincia,estado);
    ctx.response.type = "application/json";

    if( ctx.body == "actualización correcta" ){
        ctx.response.status = 200;
        ctx.body = {
            status: '200',
            message: 'actualización correcta'
        };
    }else{

        ctx.body = pandemium.addDatos(nick,provincia,estado);
        ctx.response.status = 200;
        

        if( ctx.body != "añadido correctamente" ){
            ctx.response.status = 404;
            ctx.body = {
                status: 'Error!',
                message: 'Ni actualización, ni creado el nick no existe o ha sido creado, el estado y provincia puede ser errone'
            };

            ctx.__logInfo = {
                status : ctx.response.status,
                header : ctx.response.header,
                path: ctx.request.url,
                body : ctx.body
            };
        }else{

            ctx.body = {
                status: '200',
                message: 'añadido correctamente'
            };
        }
    }

	next();
});

//Definimos rutas
router.get('/total_contagios/:ccaa', async (ctx, next) => {

    let ccaa = ctx.params.ccaa;
    ctx.response.type = "application/json";

    let resultado = await requestUrl('https://c-t.vercel.app/api?ccaa='+ccaa);

    if( resultado == "Esa comunidad autonoma no existe" ){
        resultado = { status: 'Error!',
                      message : resultado }
        ctx.response.status = 404;

        ctx.__logInfo = {
            status : ctx.response.status,
            header : ctx.response.header,
            path: ctx.request.url,
            body : ctx.body
        };
    }

    ctx.body = resultado;
   
	next();
});

//Definimos rutas
router.get('/confinamiento/:ccaa', async (ctx, next) => {

    let ccaa = ctx.params.ccaa;
    ctx.response.type = "application/json";

    let resultado = await requestUrl('https://pandemiumconfinamiento.azurewebsites.net/api/confinamiento?ccaa='+ccaa);

    if( resultado == "confinada" || resultado == "no confinada" ){
        resultado = { ccaa : ccaa,
                      estado : resultado }
    }else{
        resultado = { status: 'Error!',
                      message : resultado }
        ctx.response.status = 404;

        ctx.__logInfo = {
            status : ctx.response.status,
            header : ctx.response.header,
            path: ctx.request.url,
            body : ctx.body
        };
    }

    ctx.body = resultado;
   
	next();
});

//funcion para hacer peticiones con promesas
function requestUrl(url){
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err) reject(err);
            resolve(body);
        });
    });
}

app.use(router.routes());
const server = app.listen(port);

module.exports = { server };