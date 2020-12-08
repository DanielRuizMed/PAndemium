let chai = require('chai');
const expect = require('chai').expect;

const pandemiun = require('../src/class/pandemiun')

//usamos chaihttp para hacer peticiones a la API
chai.use(require('chai-http'));
const url= 'http://localhost:3000';

describe('Consultar número de contagios, posibles o curados ', () => {

    //Test a funcion
    context('1. metodo getDatos(provincia,fecha) ', function() {

        it('1.1.1 con parametros existentes en base de datos provincia = Granada y fecha = 2020-10-13', function() {

        expect( pandemiun.getDatos("Granada","2020-10-13") ).to.have.property('provincia').to.be.equal("Granada");
        });

        /*it('1.1.2 con provincia existente y fecha no', function() {

        expect( pandemiun.getDatos.bind("Granada","2020-10-12") ).to.throw("fecha mal o provincia vacia");
        });

        it('1.1.3 con provincia no existente y fecha si', function() {

        expect( pandemiun.getDatos.bind("Gra","2020-10-13") ).to.throw("fecha mal o provincia vacia");
        });

        it('1.2.1 con provincia y fecha vacias', function() {

        expect( pandemiun.getDatos.bind("","") ).to.throw("fecha mal o provincia vacia");
        });

        it('1.2.2 con provincia bien y fecha mal', function() {

        expect( pandemiun.getDatos.bind("Granada","2020-10-") ).to.throw("fecha mal o provincia vacia");
        });*/

    });

    //Test a API
    /*context('2. Peticion GET a API ', function() {
        it('peticion get sobre datos correctos /Granada/08-10-2020', (done) => {
        chai.request(url)
            .get('/Granada/2020-10-12')
            .end( function(err,res){

            done();
        });

    });*/

});
