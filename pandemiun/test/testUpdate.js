//Requerimos paquetes
let chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();

const pandemiun = require('../src/class/pandemiun')


describe('Capacidad de actualizar los datos de un usuarios', () => {

    //Test a funcion
    context('2. metodo updateDatos(nick,provincia,estado) ', function() {

        it('2.1 actualizar valores existentes', function() {
            expect( pandemiun.updateDatos("Juan","Granada","contagiados") ).to.be.equal("actualización correcta");
        });

        it('2.2 valores existentes, provincia no existente en base de datos', function() {
            expect( pandemiun.updateDatos("Juan","Grana","contagiados") ).to.be.equal("la provincia no existe");
        });

        it('2.3 valores existentes, nick no existente en base de datos', function() {
            expect( pandemiun.updateDatos("Ju","Granada","contagiados") ).to.be.equal("el nick no existe");
        });

        it('2.4 valores vacios', function() {
            expect( pandemiun.updateDatos("","","") ).to.be.equal("nick, provincia o estado sin rellenar");
        });

        it('2.4 solo 1 valor vacio', function() {
            expect( pandemiun.updateDatos("","Granada","contagiados") ).to.be.equal("nick, provincia o estado sin rellenar");
        });

    });

});