//Requerimos paquetes
const expect = require('chai').expect;

const pandemiun = require('../src/class/pandemiun')


describe('Capacidad de actualizar los datos de un usuarios', () => {

    //Test a funcion
    context('3. metodo updateDatos(nick,provincia,estado) ', function() {

        it('3.1 actualizar valores existentes', function() {
            expect( pandemiun.updateDatos("Juan","Granada","contagiados") ).to.be.equal("actualización correcta");
        });

        it('3.2 valores existentes, provincia no existente en base de datos', function() {
            expect( pandemiun.updateDatos.bind("Juan","Grana","contagiados") ).to.throw("nick, provincia o estado sin rellenar");
        });

        it('3.3 valores existentes, nick no existente en base de datos', function() {
            expect( pandemiun.updateDatos.bind("Ju","Granada","contagiados") ).to.throw("nick, provincia o estado sin rellenar");
        });

        it('3.4 valores vacios', function() {
            expect( pandemiun.updateDatos.bind("","","") ).to.throw("nick, provincia o estado sin rellenar");
        });

        it('3.5 solo 1 valor vacio', function() {
            expect( pandemiun.updateDatos.bind("","Granada","contagiados") ).to.throw("nick, provincia o estado sin rellenar");
        });

    });

});
