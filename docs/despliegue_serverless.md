[<< Volver a Readme](../Readme.md)
 
------
 
Para realizar su despliegue de forma correcta nos hemos registrado en Vercel con nuestra cuenta de Github, otorgando permisos.
 
![registro y permisos](img/hito5/1_1.png)
 
En nuestro perfil de vercel clicamos en importar e indicamos la url de nuestro proyecto de Github que deseamos importar.
 
![importar proyecto](img/hito5/1_2.png)
 
Tras esto se importa el proyecto y se realiza el deploy sobre las direcciones proporcionadas.
 
![importar proyecto](img/hito5/1_3.png)
 
La facilidad de Vercel es que cuando indicamos el proyecto a importar, si no tenemos instalado Vercel como integración en nuestro proyecto, se instala para que cada vez que se realice un push o pull_request a nuestro repositorio de Github se actualice en Vercel. (**despliegue continua**)
 
![integración proyecto](img/hito5/1_4.png)
 
Ejemplo de push a nuestro proyecto con deploy en Vercel
 
![deploy vercel](img/hito5/1_5.png)
 
 
 
Para su correcto **funcionamiento** se ha creado la siguiente función, siguiendo las recomendaciones de la documentación de Vercel sobre una función en JavaScript. (No se pasa el nombre de las comunidades con acentos ni caracteres extraños por no reconocer estos)
 
    //Requiriendo datos.json, documento donde tenemos los datos en formato JSON de las comunidades.
    const datos = require("./datos.json")
    let estado = 400
 
    //función handler
    module.exports = function handler(req, res) {
 
        //Verificamos que nuestra consulta es un parametro
        if( Object.keys(req.query).length == 1 ){
          
            result = datos.filter(it => it.ccaa === req.query.ccaa )[0]
            estado = 200
 
            //y que tenemos dicha comunidad en nuestros datos o la key es ccaa(comunidad autónoma)
            if ( result == undefined ){
                result = "Esa comunidad autónoma no existe";
                estado = 400
            }
 
        }else{
            result = "No has indicado el parámetro o no es el formato indicado: /api?ccaa=Andalucia"
        }
 
        res.status(estado).json(result)
    }
 
Y tras su subida a github y despliegue continuo en Vercel se nos da el siguiente enlace [https://c-t.vercel.app/api?ccaa=Andalucia](https://c-t.vercel.app/api?ccaa=Andalucia), donde pasando la comunidad podemos obtener el resultado deseado:
 
![web con ccaa](img/hito5/1_6.png)


# Enlaces

- [Repositorio de contagios_total, Mini-Api contruida para Vercel](https://github.com/DanielRuizMed/contagios_total)
- [función creada](https://github.com/DanielRuizMed/contagios_total/blob/main/api/index.js)
- [archivo con datos JSON extraidos para la función, datos.json](https://github.com/DanielRuizMed/contagios_total/blob/main/api/datos.json)

---------
[<< Volver a Readme](../Readme.md)