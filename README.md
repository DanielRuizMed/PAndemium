
## PAndemium
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

### Descripción del problema
La idea viene motivada por conocer el **número de contagios** actuales en las distintas
provincias de España, la aplicación mostrara el número de casos actual y la evolución de los
mismos en el tiempo.


### Descripción del proyecto
Se va a crear un **API REST** que sera el encagado de recibir las peticiones GET de los distintos dispositivos multiplataforma y responder con datos en formato JSON. Cada petición sera dirigida al microservicio donde se operará con los datos recibidos.

Se creará el microservicio **PAndemium**, al que pasando una provincia de España y rango de días se devolveran los datos almacenados en su base de datos.

Tambien se creará un microservicio **GraPan** al que pasando los datos de rango de Covid del microservicio anterior citado generará una gráfica que devolverá como una imagen.

Para **obtener los datos** se usara una API que dispone de los datos en formato JSON,XML o CSV de los registros de contagios diarios en España. [API](https://covid19tracking.narrativa.com/es/spain/api.html)

### Herramientas
- Para implemetar la API REST y PAndemium se utilizara el lenguaje Node.js que con con mvw se ha usado la versión 12.18.4.
	- Se utlizaran las librerías:
		* Express: para hacer mas comoda la implementación de código.
		* Morgan: para ver las peticiones que se reciben
		* Nodemon: el cual solo se usará en desarrollo ya que permite no tener que estar reiniciando el servicio.
		* underscore: para recorrer de forma mas comoda los datos en formato JSON

- GranPan se implementará en PHP en la versión 7.4.10
	- Se utlizaran las librerías:
		* JpGraph: con la cual podemos generar gráficos a partir de unos datos.
		* Lumen: ayuda a desplegar el microservicion y el tratamiento de rutas.

### Documentación en Git Pages
[PAndemium](https://danielruizmed.github.io/ProyectoIV/)

### Motivo del proyecto
He decidido crear este proyecto por el reto de aprender a crear una API REST y microservicios con dos lenguajes diferentes.

### Configuración de Git
[Configuración](https://danielruizmed.github.io/ProyectoIV/docs/config.md)

### Enlaces utilizados
- [Microservicion en php](http://micaminomaster.com.co/devops/microservicio-php-lumen-nodejs-mocha/)
- [php](https://www.php.net/downloads)
- [librería de graficos php](https://jpgraph.net/features/gallery.php#line1)
- [de grafico a imagen php](https://jpgraph.net/download/manuals/chunkhtml/ch05s05.html)
- [API REST y Node.js](https://www.youtube.com/watch?v=bK3AJfs7qNY)
- [MongoDB y moongose](https://www.youtube.com/watch?v=-bI0diefasA)
- [API de datos](https://covid19tracking.narrativa.com/es/spain/api.html)
