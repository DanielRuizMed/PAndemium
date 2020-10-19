
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
                    {   "fecha":"2020-10-14",
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
        ]
        
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

    update (nick,provincia,estado) {


    }

    add (nick,provincia,estado) {

    }
}

module.exports = new ListadoContagios(); 
