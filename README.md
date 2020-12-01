
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

Para la **rúbrica 1 y 2** he decidido desplegar mi función [contagios_total()](src/class/ListadoContagios.js) de la clase ListadoContagios en Vercel.
 
- Realizando su [despliegue correcto y funcionando, enlazando la conexión entre Vercel/Github y explicación de función creada](docs/despliegue_serverless.md)
- Enlace de la [función en vercel](https://pa-ndemium.vercel.app/api?ccaa=Andalucia)
 
La función implementada contagios_total() está relacionada con [HU6](https://github.com/DanielRuizMed/PAndemium/issues/83) y se ha creado el [issue #93](https://github.com/DanielRuizMed/PAndemium/issues/93) que está relacionado con el despliegue de nuestra función en vercel.
 
La función implementada confinamiento() está relacionada con [HU7](https://github.com/DanielRuizMed/PAndemium/issues/84) y se ha creado el [issue #94](https://github.com/DanielRuizMed/PAndemium/issues/94) que está relacionado con el despliegue de nuestra función en azure functions.
 
Para el bot de Telegram se ha relacionado con [HU7](https://github.com/DanielRuizMed/PAndemium/issues/84) y se ha creado el [issue #95](https://github.com/DanielRuizMed/PAndemium/issues/95) que está relacionado con el despliegue de nuestra función en azure functions.

Para la **rúbrica 3 y 4** he implementado la función confinamiento() de la [clase ListadoContagios](src/class/ListadoContagios.js) y relacionada con la HU7 anterior mencionada.
 
- Realizando su [despliegue correcto y funcionando, enlazando la conexión entre Azure/Github y explicación de función creada](docs/despliegue_azure.md)
- Enlace a la [función en azure](https://pandemiumconfinamiento.azurewebsites.net/api/confinamiento?ccaa=Andalucia)
 
Se ha creado el bot de Telegram llamado Botconfinamiento que también en relación con HU7 donde si le pasamos una comunidad autónoma nos dirá si sigue confinada o no.
 
- [explicación de creación y imágenes de su uso](docs/bottele.md)
- [enlace al bot](https://t.me/confinamiento2bot)
 
Otros enlaces
 
- [iv.yaml](iv.yaml) con la URL de ejemplo
- [5.json](5.json) con el resultado en json de la función de vercel
 
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