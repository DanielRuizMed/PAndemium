Para aprovechar el docker creado en la rúbrica anterior se ha creado el siguiente jobs de travis donde vemos si se pasan los test desde el docker en Dockerhub

    #Como deseamos también verificar que nuestro contenedor de DockerHub sigue cumpliendo con los requisitos deseados se hace un job, con el lenguaje minimal ya que lo que deseamos es hacer funcionar docker y este ya contiene todo.
    jobs:
        include:
           - stage: "Test sobre el contenedor"
           language: minimal
           services: docker
           before_script: docker pull danielruizmed/pandemium
           script: docker run -t -v `pwd`:/test danielruizmed/pandemium

Este es el fichero [.travis.yml](../.travis.yml) que se ha utilizado.