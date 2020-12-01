
const datos = require("./confinamiento.json")
let estado = 400 

//funcion handler
module.exports = function handler(context, req) {

    if( Object.keys(req.query).length == 1 ){
        
        result[req.query.ccaa] = datos[req.query.ccaa]
        estado = 200

        if ( result == undefined ){
            result = { "ccaa" : "Esa comunidad autonoma no existe"}
            estado = 404
        }
    }else{
        result = { "ccaa" : "No has indicado el parametro o no es el formato indicado: /api?ccaa=Andalucia" }
    }

	context.res.setHeader('Content-type','application/json');
	context.res.status(estado).json(result)
}