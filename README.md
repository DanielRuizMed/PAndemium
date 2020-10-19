
## PAndemium
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

---

### Descripción del problema

La idea viene motivada por conocer el **número de contagios** y posibles contagios de la mano de la población. Este problema trata resolver o verificar si la información que nos proporcionan es real o no, haciendo de la colaboración ciudadana nuestra mejor arma.

---

### Descripción del proyecto

Se creará una **API REST** que será la encagada de responder las peticiones y procesar los datos en formato JSON. Cualquier usuario podrá consultar el número de contagios confirmados en una fecha y provincia de España. Cada usuario tendrá un nick desde el cual podrá actualizar su
estado.

---

### Herramientas

- Gestor de tareas y paquetes
	Como gestor de paquetes he elegido **npm** ante yarn, ya que es el más conocido y el que 		mejor se adapta para resolver el problema. 
	Como fichero encargado de gestionar las tareas he decidido usar package.json .

- Framework para pruebas en Node.js
	Para la realización de test he utilizado **Mocha** por se uno de los más conocidos para
	realizar test unitarios, tambien he visto que se puede testear de una
	forma más profunda que con otras herramientas conocidas como Jest.

- Biblioteca de asserciones
	He utilizado **chai** y tambien **chai-http**, ya que al se
	una API Rest no solo debemos testear que las clases/funciones cumplen con los test
	si no que todas las peticiones HTTP reciben la respuesta deseada.

[motivo elección de otras herramientas](docs/motivo.md)

---

### Archivo iv.yaml

[archivo](iv.yaml)

---

### Como hacer funcionar la aplicación (Despliegue) y test

Pasos que se deben seguir para ejecutar o realizar test del programa en este [enlace](docs/despliegue.md).

---

### Milestone, pasos con issues detallados, carpeta con clases y test

La dirección del milestone es [esta.](https://github.com/DanielRuizMed/PAndemium/milestone/7)

- [Pasos](docs/pasos.md), donde están los issues y una descripción general.
- [Clases](pandemiun/src/class), con las clases creadas.
- [Test](pandemiun/test)

---

### Historias de Usuario

[Historias](https://github.com/DanielRuizMed/PAndemium/milestone/9).

---

### Enlaces internos
- [GitPages](https://danielruizmed.github.io/PAndemium/)
- [Configuración git](https://github.com/DanielRuizMed/PAndemium/blob/master/docs/config.md)

### Enlaces externos utilizados, fuentes utilizadas para el aprendizaje
- [API REST y Node.js](https://www.youtube.com/watch?v=bK3AJfs7qNY)
