## Elección de idea
Conocer el número de contagios y posibles contagios en tu provincia gracias a la colaboración ciudadana. 

## Node.js
He elegido implementar con JavaScript en el entorno de Node.js, por que nunca he creado nada en dicho entorno y por el reto de aprender a desplegar una API REST. Con mvw se ha usado la versión 12.18.4.

## ficheros JSON
Almaceno los datos en dos ficheros JSON, por facilidad de resolver el problema de 
entrega de datos en dicho formato del modo mas eficiente encontrado.

## NPM y package.json
Como gestor de paquetes he elegido npm, ya que es el más conocido y el que mejor
se adapta para resolver el problema. 
Como fichero encargado de gestionar las tareas he decidido usar package.json .

## Mocha, chai y chai-http
Para la realización de test he utilizado Mocha por se uno de los más conocidos para
realizar test unitarios, tambien he visto que se puede testear de una
forma más profunda que con otras herramientas conocidas como Jest.

Como librería de asserciones he utilizado chai y tambien chai-http, ya que al se
una API Rest no solo debemos testear que las clases/funciones cumplen con los test
si no que todas las peticiones HTTP reciben la respuesta deseada.