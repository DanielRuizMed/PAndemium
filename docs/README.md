## PAndemium
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

---

### Descripción del problema

La idea viene motivada por conocer el **número de contagios** y posibles contagios de la mano de la población. Este problema trata resolver o verificar si la información que nos proporcionan es real o no, haciendo de la colaboración ciudadana nuestra mejor arma.

---

### Descripción del proyecto

Se creará una **API REST** que será la encargada de responder las peticiones y procesar los datos en formato JSON. Cualquier usuario podrá consultar el número de contagios confirmados en una fecha y provincia de España. Cada usuario tendrá un nick desde el cual podrá actualizar su
estado.

---

### Elección de contenedor Base

Para la elección de mi contenedor Base he barajado 4 diferentes opciones:

1. Descargar la imagen node:14 , esta es la genérica de node y se suele elegir cuando no 
se conoce bien las necesidades que se necesitan.

	De las 4 opciones es la que primero descarté debido a su gran tamaño 121,33 MB y por su   		tiempo de construcción (3 minutos y 47 segundos). A favor he de comentar que es la segunda 		imagen con el mejor tiempo a la hora de pasar los test ( 7,277 segundos ).

2. Probar con una imagen más reducida node:14.14.0-alpine3.10, una versión lo más reducida posible basada en Alphine Linux

	Lo que primero me atrajo de esta opción fue su pequeño tamaño 18,28 MB y su tiempo de     		construcción (1 minuto y 28,280 segundos). Lo que más me defraudo fue su tiempo de         		ejecución de los test (11,313 segundos) y que tuve que ampliar el Dockerfile debido a     		errores en la construcción de la imagen por la falta del lenguaje de órdenes bash y        		teniendo que cambiar algunas órdenes como la creación del usuario. Leyendo detalles de     		esta imagen es poco común que se instale en ella bash, git.... y por su uso terminé        		descartando esta opción.

3. Así que elegí node:14-slim una versión con los paquetes mínimos para que Node funcione.

	Con un tamaño de 24,39 MB y tiempo de construcción (1 minuto y 40,395 segundos). Su tiempo de ejecución para los test es de 9,124 segundos. Elegí esta opción por los criterios de    		elección sobre tamaño y tiempos de construcción/ejecución, además de que no necesitaba    		modificar mi Dockerfile.

4. Tras analizar que en todas tenía que instalar mi gestor de tareas globalmente, busque una imagen con este ya instalado, buscando una mayor eficiencia en todo. Encontre digitallyseamless/nodejs-bower-grunt.

	En todas las imágenes que buscaba sobre grunt se incluía como gestor de dependencias      		bower, pensé si no lo utilizo pues lo elimino. Pero tras analizar bien el Dockerfile vi que se basaba en descargar una versión de node he instalar npm, grunt como yo mismo hacía en mi Dockerfile y que el tamaño 90MB, tiempo de construcción (2 minutos y 57 segundos) no superan el escogido anteriormente. Solo destacó en la ejecución con 6,576 segundos.

También busqué imágenes con Mocha instalado pero la mayoría utilizaba versiones de node muy antiguas y me interesa construir una imagen donde yo elija con que deseo trabajar y todas superan el tamaño de la elegida.

En un caso hipotético de elegir por eficiencia a la hora de realizar los test elegiría la opción 4 pero como se contemplan tanto tiempo de construcción y tamaño elijo la opción **3 node:14-slim** por tener de media lo mejor y ser la que más me ha convencido. [Vea los análisis realizados sobre las distintas opciones.](contenedor_base.md)

---

### Dockfile y .dockerignore

He creado el siguiente [Dockerfile](../pandemiun/Dockerfile) siguiendo las recomendaciones de buenas prácticas, con la excepción de poner dos órdenes Run debido a la necesidad de subir el documento package.json con las dependencias a instalar.

También he creado un [.dockerignore](../pandemiun/.dockerignore), para indicar que contenido no quiero que se añada a la imagen.

---

### Como ejecutar test desde DockerHub o GitHub (Github Container Registry)

Para ejecutar los test desde la [imagen de dockerhub](https://hub.docker.com/r/danielruizmed/pandemiun)

~~~

docker run -t -v pwd:/test danielruizmed/pandemiun

~~~

Para ejecutar los test desde la imagen de github

~~~

docker run -t -v pwd:/test docker.pkg.github.com/danielruizmed/pandemium/pandemiun:v1

~~~

Desde aquí se puede ver el [Registro de contenedores de Github](https://github.com/DanielRuizMed/PAndemium/packages/471277)

---

### Enlaces internos

Accede al [milestone que agrupa los issues.](https://github.com/DanielRuizMed/PAndemium/milestone/8)

- [Pasos explicados con issues](pasos.md), donde están los issues y una descripción general.
- [Clases implementadas](../pandemiun/src/class), con las clases creadas.
- [Test y clases de test](../pandemiun/test)
- [Historias de Usuario](https://github.com/DanielRuizMed/PAndemium/milestone/9).
- [iv.yaml](../iv.yaml)
- [despliegue de aplicación sin docker](despliegue.md).
- [motivo elección herramientas](motivo.md)
- [GitPages](https://danielruizmed.github.io/PAndemium/)
- [Configuración git](https://github.com/DanielRuizMed/PAndemium/blob/master/docs/config.md)

### Enlaces externos utilizados, fuentes utilizadas para el aprendizaje
- [API REST y Node.js](https://www.youtube.com/watch?v=bK3AJfs7qNY)