
const datos = require("../src/json/contagios_total.json")
let estado = 400

//funcion handler
module.exports = function handler(req, res) {

	if( Object.keys(req.query).length == 1 ){
		
		result = datos.filter(it => it.ccaa === req.query.ccaa )[0]
		estado = 200

		if ( result == undefined ){
			result = "Esa comunidad autonoma no existe";
			estado = 404
		}

	}else{
		result = "No has indicado el parametro o no es el formato indicado: /api?ccaa=Andalucia"
	}

	res.status(estado).json(result)
}