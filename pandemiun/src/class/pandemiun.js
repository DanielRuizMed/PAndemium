const li = require('./ListadoContagios.js')

class Pandemiun //clase que procesa la lógica de los datos
{

    constructor() { 

        console.log(this.getDatos("Granada","2020-10-13"));
    }

    getDatos (provincia,fecha) {

        let resultado = "fecha mal o provincia vacia";
        
        if( /^\d{4}-\d{2}-\d{2}$/.test(fecha) && provincia )
            resultado = li.select(provincia,fecha);

        return resultado;
    }

    updateDatos (nick,provincia,estado) {

        
    }

    addDatos (nick,provincia,estado) {

        
    }

}

module.exports = new Pandemiun(); 