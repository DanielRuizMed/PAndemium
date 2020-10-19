
class ListadoUsuarios //clase que procesa la lógica de los datos
{

    constructor() 
    {
		this.usuarios = 
			[ 
				{ 	"nick" : "Pepe",
					"fecha":"2020-10-13",
					"estado":"contagidos",
					"provincia":"Granada"
				},
				{ 	"nick":"Juan",
					"fecha":"2020-10-14",
					"estado":"contagiados",
					"provincia":"Granada"
				}
			];

			this.formatYmd = date => date.toISOString().slice(0, 10);
        
    }

    exist (nick) {

		let resultado = false;

		if ( this.usuarios.filter(it => it.nick === nick ) != undefined )
			resultado = true;

		return resultado;
    }

    update (nick,provincia,estado) {

		let fecha_hoy = this.formatYmd(new Date());
		let ultimo_estado = 0;

		this.usuarios.filter( function(it){

			if( it.nick === nick ){

				if( it.fecha == fecha_hoy ){ 
					misma_fecha = 1;
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

    add (nick,provincia,estado) {

    }
}

module.exports = new ListadoUsuarios(); 
