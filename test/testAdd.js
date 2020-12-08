//Requerimos paquetes
const expect = require('chai').expect;

const pandemiun = require('../src/class/pandemiun');


describe('Capacidad de actualizar los datos de un usuarios', () => {

    //Test a funcion
    context('3. metodo addDatos(nick,provincia,estado) ', function() {

        it('3.1 actualizar valores existentes', function() {
            expect( pandemiun.addDatos("Daniel","Granada","contagiados") ).to.be.equal("añadido correctamente");
        });

        /*it('3.2 valores existentes, provincia no existente en base de datos', function() {
            expect( pandemiun.addDatos.bind("Juan","Grana","contagiados") ).to.throw("nick, provincia o estado sin rellenar");
        });

        it('3.3 valores existentes, nick no existente en base de datos', function() {
            expect( pandemiun.addDatos.bind("Ju","Granada","contagiados") ).to.throw("nick, provincia o estado sin rellenar");
        });

        it('3.4 valores vacios', function() {
            expect( pandemiun.addDatos.bind("","","") ).to.throw("nick, provincia o estado sin rellenar");
        });

        it('3.5 solo 1 valor vacio', function() {
            expect( pandemiun.addDatos.bind("","Granada","contagiados") ).to.throw("nick, provincia o estado sin rellenar");
        });*/

    });

});
