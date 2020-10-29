Esta es una imagen del primer Dockerfile creado siguiendo buenas prácticas:
 
![creación](img/hito3/opt1.png)
 
Y se ha optimizado:
 
- Se han buscado complementos pre-instalados en la imagen como yarn y tras verificar que no los usamos los borramos.
 
- También se ha eliminado package.json y packaje-lock.json tras instalar dependencias puesto que ya no se van a utilizar más
 
- También se ha borrado la carpeta con las dependencias de la carpeta del usuario tras crear volumen en la carpeta test deseada.
 
![ejecucción](img/hito3/opt2.png)

