// modulos/liberías
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');

//Clases
const pandemium = require('./class/pandemiun.js')
var port = process.env.PORT || 8081;

//instancias
const app = new Koa();
const router = new Router();

// Set up body parsing middleware
app.use(koaBody());

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
    }

	next();
});

app.use(router.routes());
const server = app.listen(port);