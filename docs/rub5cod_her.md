Se ha creado en documento [index.js](../index.js) que será el controlador de nuestra API debido al uso de promesas para las peticiones a las Mini-API serverless creadas. Utilizando la librería nodejs para facilitarnos el trabajo con las rutas y request para hacer y recibir respuestas de una dirección web.
 
    //He requerido las librerías indicadas
    var express = require('express');
    var app = express();
    const request = require('request');
    
    //He creado esta función para no repetir código y crear una promesa para que esta se ejecute de forma asíncrona y devuelva un callback cuando finalice que será las respuestas de nuestras Mini-API
    function requestUrl(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
                if (err) reject(err);
                resolve(body);
            });
        });
    }
    
    //Cuando la ruta pasada es la pedida se hace la consulta a la Mini-API confinamiento
    app.get('/api/confinamiento', async function (req, res) {
    
        let ccaa = req.query.ccaa;
    
        let resultado = await requestUrl('https://confinamientopandemium.azurewebsites.net/api/Confinamiento?ccaa='+ccaa);
    
        res.json(resultado);
    })
    
    //Cuando la ruta pasada es la pedida se hace la consulta a la Mini-API total_contagios
    app.get('/api/total_contagios', async function (req, res) {
    
        let ccaa = req.query.ccaa;
    
        let resultado = await requestUrl('https://c-t.vercel.app/api?ccaa='+ccaa);
    
        res.send(resultado);
    })
    
    //Ponemos a escuchar la aplicación el puerto 8081
    var server = app.listen(8081);
 
También se han implementado los test para estas Mini-Api que se ejecutarán en nuestras web de integración continua travis y shippable para verificar que todo responde según lo pedido. Donde hemos utilizado chai-http para ampliar las funcionalidades de chai y poder hacer peticiones a una dirección url y analizar su resultado.
 
- [Test sobre la Mini-API contagiados_total](../test/testContagios_total.js)
- [Test sobre la Mini-API confinados](../test/testConfinamiento.js)