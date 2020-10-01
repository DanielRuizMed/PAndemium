const { Router } = require('express');//llama al metodo de express que me permite ejecutar muchas rutas
const router = Router();

const fetch = require('node-fetch');//para pedir recursos a otra api

router.get('/pandemiun/:provincia/:rango', async (req,res) => {//para no tener que instanciar app
    const { provincia, rango } = req.params;

    if( provincia && rango ){

        const response = await fetch('https://api.covid19tracking.narrativa.com/api/country/spain/region/andalucia?date_from=2020-09-30&date_to=2020-10-01');

        const data = await response.json();

        res.json(data);//peticion al micro servicio
    }else{
        res.send("Url mal introducida");
    }
});

module.exports = router;