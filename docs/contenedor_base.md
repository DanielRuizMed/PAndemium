
Para medir el tiempo en lanzar las ordenes he utilizado la orden **time** de linux.

El Dockerfile de las imagenes es diferente al actual, ya que en el incluia todo el programa. En el actual solo se incluyen los test y se carga los ficheros a testear con las opción `-v` de `docker run`.

1. **node:14**

EL tamaño tras construir la imagen es:

![tamaño](img/hito3/hito3_12.png)

EL tiempo de construir es:

![tiempo construcción](img/hito3/hito3_11.png)

EL tiempo de ejecucción es:   

![tiempo ejecucción](img/hito3/hito3_13.png)

2. **node:14.14.0-alpine3.10**

EL tamaño tras construir la imagen es:

![tamaño](img/hito3/hito3_6.png)

EL tiempo de construir es:

![tiempo construcción](img/hito3/hito3_5.png)

EL tiempo de ejecucción es:

![tiempo ejecucción](img/hito3/hito3_7.png)

3. **node:14-slim**

EL tamaño tras construir la imagen es:

![tamaño](img/hito3/hito3_10.png)

EL tiempo de construir es:

![tiempo construcción](img/hito3/hito3_8.png)

EL tiempo de ejecucción es:

![tiempo ejecucción](img/hito3/hito3_9.png)

4. **digitallyseamless/nodejs-bower-grunt**

EL tamaño tras construir la imagen es:

![tamaño](img/hito3/hito3_1.png)

EL tiempo de construir es:

![tiempo construcción](img/hito3/hito3_2.png)

EL tiempo de ejecucción es:

![tiempo ejecucción](img/hito3/hito3_3.png) 