
## PAndemium
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

### Instalación y despliegue

Tras descargar el código, entramos en la carpera pandemiun, abrimos una terminal y tecleamos:

	npm install 

Tras tener intalados los modulos entramos en src y ponemos en la terminal

	npm index

### Descripción del problema
La idea viene motivada por conocer el **número de contagios** y posibles contagios de la mano de la población. Este problema trata resolver o verificar si la información que nos proporcionan es real o no, haciendo de la colaboración ciudadana nuestra mejor arma.

### Descripción del proyecto
Se creará una **API REST** que será la encagada de responder las peticiones y procesar los datos en formato JSON. Cualquier usuario podrá consultar el número de contagios confirmados en una fecha y provincia de España. Un usuario Registrado podrá comunicar su estado (bien, contagiado, sintomas leves, sintomas preocupantes).

### Motivo
Conocer el número de contagios y posibles contagios en tu provincia gracias a la colaboración ciudadana. He elegido implementar con JavaScript en el entorno de Node.js, por el reto de aprender a desplegar API REST en este entorno.

### Pasos
[historia](docs/pasos.md)

### Herramientas
- Para implemetar PAndemium se utilizara el lenguaje JavaScript en el entorno de ejecución de Node.js que con mvw se ha usado la versión 12.18.4.
	- Se utlizaran las librerías:
		* Express: para hacer mas comoda la implementación de código.
		* jwt-simpe: para hacer el sistema de autentificación por tokens
- MongoDB
	- Se utlizaran las librerías:
		* Mongoose: para hacer mas sencillas las consultas.

### Documentación en Git Pages
[PAndemium](https://danielruizmed.github.io/PAndemium/)

### Configuración de Git
[Configuración](https://github.com/DanielRuizMed/PAndemium/blob/master/docs/config.md)

### Enlaces utilizados
- [API REST y Node.js](https://www.youtube.com/watch?v=bK3AJfs7qNY)
- [MongoDB y moongose](https://www.youtube.com/watch?v=-bI0diefasA)
- [tokens y registros](https://www.youtube.com/watch?v=zut4jK6C6WQ&list=PLUdlARNXMVkk7E88zOrphPyGdS50Tadlr&index=13)
