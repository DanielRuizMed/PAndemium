//Requerimos paquetes
let chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();

const pandemiun = require('../src/class/pandemiun')

//usamos chaihttp para hacer peticiones a la API
chai.use(require('chai-http'));
const url= 'http://localhost:3000';

describe('Capacidad de actualizar los datos de un usuarios', () => {

    //Test a funcion
    context('2. metodo updateDatos(nick,provincia,estado) ', function() {

        it('2.1 actualizar valores existentes', function() {
            expect( pandemiun.updateDatos("Juan","Granada","contagiados") ).to.be.equal("bien");
        });

        it('2.2 valores existentes, provincia no existente en base de datos', function() {
            expect( pandemiun.updateDatos("Juan","Grana","contagiados") ).to.be.equal("Provincia erronea");
        });

        it('2.3 valores existentes, nick no existente en base de datos', function() {
            expect( pandemiun.updateDatos("Ju","Granada","contagiados") ).to.be.equal("Nick erroneo");
        });

        it('2.4 valores vacios', function() {
            expect( pandemiun.updateDatos("","","") ).to.be.equal("nick, provincia o estado sin rellenar");
        });

        it('2.4 solo 1 valor vacio', function() {
            expect( pandemiun.updateDatos("","Granada","contagiados") ).to.be.equal("nick, provincia o estado sin rellenar");
        });

    });

    //Test a API
    context('2. Peticion POST a API ', function() {
        /*it('peticion post sobre datos correctos /Granada/08-10-2020', (done) => {
        chai.request(url)
            .post('/Granada/08-10-2020')
            .end( function(err,res){

            console.log(res.body)
            expect(res.body).to.have.property('Provincia').to.be.equal("Granada");
            expect(res).to.have.status(200);
            done();
        });
        });*/

        /*it('peticion post sobre datos incorrectos /nada/0', (done) => {
        chai.request(url)
            .post('/nada/0')
            .end( function(err,res){

            console.log(res.body)
            expect(res.body).to.have.property('contagiados').to.be.equal([]);//igual a nada ,, pensar respuesta json fail
            expect(res).to.have.status(200);
            done();
        });
        });*/
    });

});