const { Router } = require('express');//llama al metodo de express que me permite ejecutar muchas rutas
const router = Router();

router.get('/:provincia/:desde/:hasta',(req,res) => {//para no tener que instanciar app
    res.send("Correcto get /api/pandemiun/provincia/fecha_desde/fecha_hasta");
});

router.post('/:provincia/:desde/:hasta',(req,res) => {//para no tener que instanciar app
    res.send("Correcto post /api/pandemiun/provincia/fecha_desde/fecha_hasta");
});

router.delete('/:provincia/:desde/:hasta',(req,res) => {//para no tener que instanciar app
    res.send("Correcto delete /api/pandemiun/provincia/fecha_desde/fecha_hasta");
});

router.put('/:provincia/:desde/:hasta',(req,res) => {//para no tener que instanciar app
    res.send("Correcto put /api/pandemiun/provincia/fecha_desde/fecha_hasta");
});

module.exports = router;