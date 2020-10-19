const li = require('./ListadoContagios.js');
const us = require('./ListadoUsuarios.js')

class Pandemiun //clase que procesa la lógica de los datos
{

    constructor() { 

    }

    getDatos (provincia,fecha) {

        let resultado = "fecha mal o provincia vacia";
        
        if( /^\d{4}-\d{2}-\d{2}$/.test(fecha) && provincia )
            resultado = li.select(provincia,fecha);

        return resultado;
    }

    updateDatos (nick,provincia,estado) {

        let resultado = "nick, provincia o estado sin rellenar";
        let operacion;
        
        //*** TAREA: crear lista de provincias y estados fija */
        if( nick && provincia && estado ){

            if( us.exist(nick) ){

                operacion = us.update(nick,provincia,estado);
                if( li.exits(provincia) ){

                    resultado = li.update(provincia,estado,operacion);
                    if( resultado != 0 ) resultado = "actualización correcta"
    
                }else{
                    resultado = "la provincia no existe";
                }

            }else{
                resultado = "el nick no existe";
            }
        }

        return resultado;
    }

    addDatos (nick,provincia,estado) {

        let resultado = "nick, provincia o estado sin rellenar";
        let operacion;
        
        //*** TAREA: crear lista de provincias y estados fija */
        if( nick && provincia && estado ){

            if( !us.exist(nick) ){

                us.add(nick,provincia);
                resultado = this.updateDatos(nick,provincia,estado);
                if( resultado == "actualización correcta" ) resultado = "añadido correctamente";

            }else{
                resultado = "el nick existe";
            }
        }

        return resultado;
    }

}

module.exports = new Pandemiun(); 