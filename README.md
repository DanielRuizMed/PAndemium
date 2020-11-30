
## PAndemium
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

---

### Descripción del problema

La idea viene motivada por conocer el **número de contagios** y posibles contagios de la mano de la población. Este problema trata de resolver o verificar si la información que nos proporcionan es real o no, haciendo de la colaboración ciudadana nuestra mejor arma.

---

### Descripción del proyecto

Se creará una **API REST** que será la encargada de responder las peticiones y procesar los datos en formato JSON. Cualquier usuario podrá consultar el número de contagios confirmados en una fecha y provincia de España. Cada usuario tendrá un nick desde el cual podrá actualizar su
estado.

---

### Rúbrica 5
Para la **rúbica 1 y 2** he decidido desplegar mi funcion [contagios_total()](src/class/ListadoContagios.js) de la clase ListadoContagios en Vercel.

- Realizando su [despliegue correcto y funcionando, enlazando la conexión entre Vercel/Github y explicación de función creada](docs/despliegue_serverless.md)
- Enlace de la [función en vercel](https://pa-ndemium.vercel.app/api?ccaa=Andalucia)

La función implementada contagios_total() está relacionada con [HU6](https://github.com/DanielRuizMed/PAndemium/issues/83) y se ha creado el [issue #93](https://github.com/DanielRuizMed/PAndemium/issues/93) que esta relacionado con el despliegue de nuestra función en vercel.

La función implementada confinamiento() está relacionada con [HU7](https://github.com/DanielRuizMed/PAndemium/issues/84) y se ha creado el [issue #94](https://github.com/DanielRuizMed/PAndemium/issues/94) que esta relacionado con el despliegue de nuestra función en azure functions.



[El milestone con los issues](https://github.com/DanielRuizMed/PAndemium/milestone/11). 

#### Uso (e integración) de varias plataformas de despliegue (es decir, no repetir la misma función en todas las plataformas, sino crear funciones nuevas que también se integren en el proyecto). o uso de plataformas tales como Firebase o Azure functions.

He decidido crear una Mini-Api en Azure functions (en python) donde pasando una comunidad autónoma de España, nos devuelve si esta confinada o no.

- Realizando su [despliegue correcto y funcionando, enlazando la conexión entre Azure/Github y explicación de función creada](docs/despliegue_azure.md)
- Enlace al [repositorio confinamiento](https://github.com/DanielRuizMed/confinamiento3) y enlace a la [función en azure](https://confinamientopandemium.azurewebsites.net/api/Confinamiento?ccaa=Andalucia)

#### En conjunción con la rúbrica 2, se asigna por originalidad, buena integración dentro del proyecto, tener que programarlos en un lenguaje diferente al resto del proyecto (si es que el lenguaje en que está este no está soportado en el sistema serverless), integración con un front-end web/bot de Telegram/webhook de cualquier tipo que funcione en la práctica.

Se ha creado el bot de Telegram llamado Botconfinamiento que si lo inicias te dice el tiempo de confinamiento.
- [explicación de creación y imagenes de su uso](docs/bottele.md)
- [Repositorio Github](https://github.com/DanielRuizMed/BotConfinamiento)
- [enlace al bot](https://t.me/confinamiento2bot)

Se ha creado la funcion en Azure functions confinamiento utilizando python. 
-   [Repositorio Github](https://github.com/DanielRuizMed/confinamiento3)
-   [Enlace de ejecucioón de la aplicación en Azure](https://confinamientopandemium.azurewebsites.net/api/Confinamiento?ccaa=Andalucia)

---

### Historial de rúbricas

- [readme de rúbrica 3](docs/rub3.md)
- [readme de rúbrica 4](docs/rub4.md)

### Enlaces internos

Accede al [milestone que agrupa los issues.](https://github.com/DanielRuizMed/PAndemium/milestone/8)

- [Pasos explicados con issues](docs/pasos.md), donde están los issues y una descripción general.
- [Clases implementadas](src/class), con las clases creadas.
- [Test y clases de test](test)
- [Historias de Usuario](https://github.com/DanielRuizMed/PAndemium/milestone/9).
- [iv.yaml](iv.yaml)
- [despliegue de aplicación sin docker](docs/despliegue.md).
- [motivo elección herramientas](docs/motivo.md)
- [GitPages](https://danielruizmed.github.io/PAndemium/)
- [Configuración git](https://github.com/DanielRuizMed/PAndemium/blob/master/docs/config.md)

### Enlaces externos utilizados, fuentes utilizadas para el aprendizaje
- [API REST y Node.js](https://www.youtube.com/watch?v=bK3AJfs7qNY)