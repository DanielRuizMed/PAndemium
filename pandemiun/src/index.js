const express = require('express');
const app = express();

//settings
app.set( 'port', process.env.PORT || 3000 );//process.env.PORT 
app.set( 'json spaces', 2 );

app.use( express.urlencoded( {extended: false} ) );//nuestro servidor recoja-entienda los datos enviados por formularios
app.use( express.json() );//permite al servidor recibir texto formato json (nuestro servidor va a enviar/ recibir json)

//ROUTES
app.use( '/api/pandemiun' , require('./routes/index.js') );

//Lanzar servicio en el puerto indicado
app.listen( app.get( 'port' ) , () => {
    console.log( `Server on port ${ app.get( 'port' ) }` );
});
