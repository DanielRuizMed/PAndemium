const ListadoContagios = require('./ListadoContagios.js');
const ListadoUsuarios = require('./ListadoUsuarios.js')

class Pandemiun //clase que procesa la lógica de los datos
{

    constructor() { 
        var provincias = new ListadoContagios("../json/provincias.json");
        var usuarios = new ListadoUsuarios("../json/usuarios.json");

        this.getProvincias = function(provincia,fecha){
            let res = provincias.select(provincia,fecha);

            if(fecha == -1) res = provincias.exits(provincia);

            return res;
        };

        this.setProvincias = function(provincia,estado,operacion){
            return provincias.update(provincia,estado,operacion);
        };

        this.getUsuarios = function(nick){
            return usuarios.exist(nick);
        };

        this.setUsuarios = function(nick,provincia,estado){
            let res = usuarios.update(nick,provincia,estado);

            if ( estado == -1 ) res = usuarios.add(nick,provincia,-1);
            return res;
        };

    }

    getDatos (provincia,fecha) {

        let resultado = "fecha mal o provincia vacia";
        
        if( /^\d{4}-\d{2}-\d{2}$/.test(fecha) && provincia )
            resultado = this.getProvincias(provincia,fecha);
        else
            throw new Error(resultado);

        return resultado;
    }

    updateDatos (nick,provincia,estado) {

        let resultado = "nick, provincia o estado sin rellenar";
        let operacion;
        
        //*** TAREA: crear lista de provincias y estados fija */
        if( nick && provincia && estado ){

            if( this.getUsuarios(nick) ){

                operacion = this.setUsuarios(nick,provincia,estado);
                if( this.getProvincias(provincia,-1) ){

                    resultado = this.setProvincias(provincia,estado,operacion);
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

            if( !this.getUsuarios(nick) ){

                this.setUsuarios(nick,provincia,-1);
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
