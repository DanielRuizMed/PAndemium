const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);//process.env.PORT PARA LUEGO EMITIR EN EL PUERTO DE LA NUBE QUE NOS DEJEN USAR
app.set('json spaces', 2);

//middleware 
app.use(morgan('dev'));//me permite ver por consola lo que llega al servidor

app.use(express.urlencoded({extended: false}));//nuestro servidor recoja-entienda los datos enviados por formularios
app.use(express.json());

//ROUTES
app.use('/api',require('./routes/index.js'));//utliza las rutas pero todas empiezan por 'api'

//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});