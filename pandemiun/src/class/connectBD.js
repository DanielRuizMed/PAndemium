const { Console } = require('console');
const fs = require('fs');
const path = require('path');

class ConnectBD //clase que procesa la lógica de los datos
{

    constructor(datos) 
    {
        //leo el archivo donde almaceno los datos en formato json "imitando una BD en json"
        this.datos = JSON.stringify(require("../json/bd.json"));
        this.datos = JSON.parse(this.datos);

        this.usuarios = require("../json/users.json");

        this.formatYmd = date => date.toISOString().slice(0, 10);
        
    }

    select (provincia,fecha) { 

        let proc1 = this.datos.filter(it => it.provincia === provincia );
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

        let existe1 = this.usuarios.filter(it => it.nick === nick );
        let existe2 = this.datos.filter(it => it.provincia === provincia );
        let resultado = "Nick erroneo";
        let misma_fecha = 0;
        let fecha_hoy = this.formatYmd(new Date());      // 2020-05-06
        let ultimo_estado=0;
        let creado = 0;

        if( existe1[0] != undefined ){

            if( existe2[0] != undefined ){

                //Actualizamos datos usuarios locales
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

                //actualizamos datos usuarios base de datos
                fs.writeFile(path.join(__dirname, "../json/users.json"), JSON.stringify(this.usuarios), function writeJSON(err) {
                    if (err) return console.log(err);
                });

                //Actualizamos datos locales contagios
                this.datos.filter( function(it){

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

                            it.fechas.push(datos_nuevos);
                        }else{//ya existe

                            it.fechas.filter( function(it){//vemos si existe la fecha creada en la provincia
                                if( it.fecha == fecha_hoy ){
                                    
                                    if( misma_fecha = 1 ){

                                        it[ultimo_estado] = parseInt(it[ultimo_estado]) - 1;
                                        it[estado] = parseInt(it[estado]) + 1;
                                    }else{

                                        it[estado] = parseInt(it[estado]) + 1;
                                    }
                                } 
                            });

                        }
                    }
                } );

                
                //actualizamos datos contagios base de datos
                fs.writeFile(path.join(__dirname, "../json/bd.json"), JSON.stringify(this.datos), function writeJSON(err) {
                    if (err) return console.log(err);
                });

                resultado = "bien";
            }else{
                resultado = "Provincia erronea";
            }
        }

        return resultado;
    }

    add (nick,provincia,estado) {

        let existe1 = this.usuarios.filter(it => it.nick === nick );
        let resultado = "EL nick ya existe";
        let fecha_hoy = this.formatYmd(new Date());

        if( existe1[0] == undefined ){

            let datos_nuevos = {
                "nick":nick,
                "fecha":fecha_hoy,
                "estado":estado,
                "provincia":provincia
            }

            this.usuarios.push(datos_nuevos);

            //actualizamos datos usuarios base de datos
            fs.writeFile(path.join(__dirname, "../json/users.json"), JSON.stringify(this.usuarios), function writeJSON(err) {
                if (err) return console.log(err);
            });

            //Actualizamos datos locales contagios
            this.datos.filter( function(it){

                if( it.provincia === provincia ){
                    
                    it.fechas.filter( function(it){

                        if( it.fecha == fecha_hoy ) it[estado] = parseInt(it[estado]) + 1;
                             
                    });
                }
            } );
            
            //actualizamos datos contagios base de datos
            fs.writeFile(path.join(__dirname, "../json/bd.json"), JSON.stringify(this.datos), function writeJSON(err) {
                if (err) return console.log(err);
            });

            resultado = "bien";
        }

        return resultado;
    }

}

module.exports = new ConnectBD(); 