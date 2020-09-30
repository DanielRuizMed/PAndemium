const { Router } = require('express');//llama al metodo de express que me permite ejecutar muchas rutas
const router = Router();

router.get('/pandemiun/:provincia/:rango',(req,res) => {//para no tener que instanciar app
    const { provincia, rango } = req.params;

    if( provincia && rango ){
        res.send("bien");//peticion al micro servicio
    }else{
        res.send("Url mal introducida");
    }
});

module.exports = router;