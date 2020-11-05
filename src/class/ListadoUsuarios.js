
class ListadoUsuarios //clase que procesa la lógica de los datos
{

    constructor(datos) 
    {
		var usuarios = require(datos);
			
		this.formatYmd = date => date.toISOString().slice(0, 10);7

		this.getUsuarios = function (){
			return usuarios;
		}

		this.setUsuarios = function (datos){
			return usuarios.push(datos);
		}
        
    }

    exist (nick) {

		let resultado = false;

		if ( this.getUsuarios().filter(it => it.nick === nick )[0] != undefined )
			resultado = true;

		return resultado;
    }

    update (nick,provincia,estado) {

		let fecha_hoy = this.formatYmd(new Date());
		let ultimo_estado = 0;

		this.getUsuarios().filter( function(it){

			if( it.nick === nick ){

				if( it.fecha == fecha_hoy ){ 
					//misma_fecha = 1;
					ultimo_estado = it.estado;
				}else{ 
					it.fecha = fecha_hoy;  
				}
				
				it.estado = estado;
				it.provincia = provincia
			}

		} );

		return ultimo_estado;

    }

    add (nick,provincia) {

		let datos_nuevos = {
			"nick":nick,
			"fecha":"2019-00-00",
			"estado":"sin_calisificar",
			"provincia":provincia
		}

		this.setUsuarios(datos_nuevos);
    }
}

module.exports = ListadoUsuarios; 
