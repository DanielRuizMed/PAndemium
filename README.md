
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

### Rúbricas 6

Justificación técnica del [framework elegido](docs/just_fra_mic.md) para el microservicio y [documentación de cómo se usa, diseño de la API y rutas](docs/uso_di_ru.md).
 
Para el desarrollo del microservicio se han implementado el código y test
siguiendo el diseño explicado y las historias de usuario:
 
- Para la resolución de [HU3, consultar en un provincia y fecha los datos de contagios registrados](https://github.com/DanielRuizMed/PAndemium/issues/38) se ha implementado el siguiente [código y test](docs/co_te_hu3.md)
- Para la resolución de [HU4, actualizar los datos del usuario (provincia, estado)](https://github.com/DanielRuizMed/PAndemium/issues/39) y [HU5, registrar un usuario y actualizar estado](https://github.com/DanielRuizMed/PAndemium/issues/40) se ha implementado el siguiente [código y test](docs/co_te_hu45.md)
- Para la resolución de [HU6, consultar el número de contagios total de una Comunidad Autónoma (CCAA)](https://github.com/DanielRuizMed/PAndemium/issues/83) se ha implementado el siguiente [código y test](docs/co_te_hu6.md)
- Para la resolución de [HU7, consultar si una Comunidad Autónama (ccaa) esta confinada](https://github.com/DanielRuizMed/PAndemium/issues/84) se ha implementado el siguiente [código y test](docs/co_te_hu7.md)
 
Para la configuración del gestor de tareas he utilizado grunt-shell para generar las tareas install y start ya que test ya estaba implementada. Y puesto que necesitaba que las tareas mandasen órdenes a una shell he necesitado utilizar el módulo grunt-shell mencionado.
 
Fichero [Gruntfile.js](Gruntfile.js)
 
Se ha empezado a crear el [Dockerfile](Dockerfile.api) para su futuro despliegue, donde hemos instalado lo necesario para el funcionamiento del gestor de tareas y subido el contenido de la carpeta ./src donde está contenida nuestra aplicación, para su posterior lanzamiento. Se ha utilizado el usuario sin privilegio creado por la imagen de node y se ha eliminado yarn, cache,.. siguiendo las buenas prácticas y buscando que la imagen sea lo más liviana posible.

Para el sistema de logs he buscado entre diferentes herramientas como:
- koa-logger
- bunyan-logger
- koa-logger-middleware

Eligiendo utilizar **koa-logger-middleware**, ya que es una versión mejorada de koa-logger, donde se permite la personalización de respuestas, [como lo uso](docs/koa_log.md).



---

### Historial de rúbricas

- [readme de rúbrica 3](docs/rub3.md)
- [readme de rúbrica 4](docs/rub4.md)
- [readme de rúbrica 5](docs/rub5.md)

### Enlaces internos

Accede al [milestone que agrupa los issues.](https://github.com/DanielRuizMed/PAndemium/milestone/12)

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