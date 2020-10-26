
class ListadoContagios //clase que procesa la lógica de los datos
{

    constructor() 
    {
	    this.contagios = [
            {   "provincia":"Granada",
                "fechas": [
                    {   "fecha":"2020-10-13",
                        "contagiados":"5",
                        "curados":"10",
                        "sintomas_leves":"100",
                        "sin_sintomas":"400",
                        "sintomas_graves":"20"
                    },
                    {   "fecha":"2020-10-19",
                        "contagiados":1,
                        "curados":"0",
                        "sintomas_leves":"0",
                        "sin_sintomas":1,
                        "sintomas_graves":"0"
                    }
                ]
            },
            {   "provincia":"Jaen",
                "fechas":[
                    {   "fecha":"2020-10-13",
                        "contagiados":"5",
                        "curados":"10",
                        "sintomas_leves":"100",
                        "sin_sintomas":"400",
                        "sintomas_graves":"20"
                    }
                ]
            }
        ];

        this.formatYmd = date => date.toISOString().slice(0, 10);
        
    }

    select (provincia,fecha) { 

        let proc1 = this.contagios.filter(it => it.provincia === provincia );
        let proc2;
        let resultado = "No hay datos de la provincia "+provincia+" en la fecha "+fecha;

        if( proc1[0] != undefined ){

            proc2 = proc1[0].fechas.filter(it => it.fecha === fecha );

            if( proc2[0] != undefined ){

                proc2[0]["provincia"] = provincia;
                resultado = proc2[0];
            }
        }

        return resultado;
    }

    update (provincia,estado,ultimo_estado) {

        let creado=0, resultado=0;
        let fecha_hoy = this.formatYmd(new Date());

        this.contagios.filter( function(it){

            if( it.provincia === provincia ){
                
                it.fechas.filter( function(it){//vemos si existe la fecha creada en la provincia
                    if( it.fecha == fecha_hoy ) creado = 1; 
                });

                if( creado == 0 ){ //si no esta creada
                    
                    let datos_nuevos = {
                        "fecha": fecha_hoy,
                        "contagiados": "0",
                        "curados": "0",
                        "sintomas_leves": "0",
                        "sin_sintomas": "0",
                        "sintomas_graves": "0"
                    }

                    datos_nuevos[estado] = "1";
                    resultado = 1;
                    it.fechas.push(datos_nuevos);
                }else{//ya existe
                    
                    it.fechas.filter( function(it){//vemos si existe la fecha creada en la provincia
                        if( it.fecha == fecha_hoy ){
                            
                            if( ultimo_estado != 0 ){

                                it[ultimo_estado] = parseInt(it[ultimo_estado]) - 1;
                                resultado = it[estado] = parseInt(it[estado]) + 1;
                            }else{

                                resultado = it[estado] = parseInt(it[estado]) + 1;
                            }
                        } 
                    });

                }
            }
        } );

        return resultado;
    }

    exits(provincia){

        let resultado = false;

		if ( this.contagios.filter(it => it.provincia === provincia )[0] != undefined )
			resultado = true;

		return resultado;
    }
}

module.exports = new ListadoContagios(); 
