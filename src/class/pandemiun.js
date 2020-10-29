const ListadoContagios = require('./ListadoContagios.js');
const ListadoUsuarios = require('./ListadoUsuarios.js')

class Pandemiun //clase que procesa la lógica de los datos
{

    constructor() { 
        this.provincias = new ListadoContagios("../json/provincias.json");
        this.usuarios = new ListadoUsuarios("../json/usuarios.json");
    }

    getDatos (provincia,fecha) {

        let resultado = "fecha mal o provincia vacia";
        
        if( /^\d{4}-\d{2}-\d{2}$/.test(fecha) && provincia )
            resultado = this.provincias.select(provincia,fecha);
        else
            throw new Error(resultado);

        return resultado;
    }

    updateDatos (nick,provincia,estado) {

        let resultado = "nick, provincia o estado sin rellenar";
        let operacion;
        
        //*** TAREA: crear lista de provincias y estados fija */
        if( nick && provincia && estado ){

            if( this.usuarios.exist(nick) ){

                operacion = this.usuarios.update(nick,provincia,estado);
                if( this.provincias.exits(provincia) ){

                    resultado = this.provincias.update(provincia,estado,operacion);
                    if( resultado != 0 ) resultado = "actualización correcta"
    
                }else{
                    resultado = "la provincia no existe";
                }

            }else{
                resultado = "el nick no existe";
            }
        }

        if( resultado != "actualización correcta" )
            throw new Error(resultado);

        return resultado;
    }

    addDatos (nick,provincia,estado) {

        let resultado = "nick, provincia o estado sin rellenar";
        let operacion;
        
        //*** TAREA: crear lista de provincias y estados fija */
        if( nick && provincia && estado ){

            if( !this.usuarios.exist(nick) ){

                this.usuarios.add(nick,provincia);
                resultado = this.updateDatos(nick,provincia,estado);
                if( resultado == "actualización correcta" ) resultado = "añadido correctamente";

            }else{
                resultado = "el nick existe";
            }
        }

        if( resultado != "añadido correctamente" )
            throw new Error(resultado);

        return resultado;
    }

}

module.exports = new Pandemiun(); 
