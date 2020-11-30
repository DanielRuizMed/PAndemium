
 
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
 
La funcion que se ha subido es la siguiente, que pertenece a [ListadoContagios](../src/class/ListadoContagios.js), a la que se le ha añadido el código de estado segun la respuesta de la función y el formato mime. Esta es la [función subida a vercel](../api/index.js).

![funcion](img/hito5/1_7.png)
 
Y tras su subida a github y despliegue continuo en Vercel se nos da el siguiente enlace [https://pa-ndemium.vercel.app/api?ccaa=Andalucia](https://pa-ndemium.vercel.app/api?ccaa=Andalucia), donde pasando la comunidad autonoma podemos obtener el resultado deseado:
 
![web con ccaa](img/hito5/1_6.png)