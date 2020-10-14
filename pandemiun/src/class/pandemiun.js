const bd = require('./connectBD.js')

class Pandemiun //clase que procesa la lógica de los datos
{

    constructor() { 

        console.log(this.updateDatos("","",""));
    }

    getDatos (provincia,fecha) {

        let resultado = "fecha mal o provincia vacia";
        
        if( /^\d{4}-\d{2}-\d{2}$/.test(fecha) && provincia )
            resultado = bd.select(provincia,fecha);

        return resultado;
    }

    updateDatos (nick,provincia,estado) {

        let resultado = "nick, provincia o estado sin rellenar";
        
        //*** TAREA: crear lista de provincias y estados fija */
        if( nick && provincia && estado )
            resultado = bd.update(nick,provincia,estado);

        return resultado;
    }

    addDatos (nick,provincia,estado) {

        let resultado = "nick, provincia o estado sin rellenar";
        
        //*** TAREA: crear lista de provincias y estados fija */
        if( nick && provincia && estado )
            resultado = bd.add(nick,provincia,estado);

        return resultado;
    }

}

module.exports = new Pandemiun(); 