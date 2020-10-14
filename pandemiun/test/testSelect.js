//Requerimos paquetes
let chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();

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

        it('1.1.2 con provincia existente y fecha no', function() {

        expect( pandemiun.getDatos("Granada","2020-10-12") ).to.be.equal("No hay datos de la provincia Granada en la fecha 2020-10-12");
        });

        it('1.1.3 con provincia no existente y fecha si', function() {

        expect( pandemiun.getDatos("Gra","2020-10-13") ).to.be.equal("No hay datos de la provincia Gra en la fecha 2020-10-13");
        });

        it('1.2.1 con provincia y fecha vacias', function() {

        expect( pandemiun.getDatos("","") ).to.be.equal("fecha mal o provincia vacia");
        });

        it('1.2.2 con provincia bien y fecha mal', function() {

        expect( pandemiun.getDatos("Granada","2020-10-") ).to.be.equal("fecha mal o provincia vacia");
        });

    });

    //Test a API
    context('2. Peticion GET a API ', function() {
        /*it('peticion get sobre datos correctos /Granada/08-10-2020', (done) => {
        chai.request(url)
            .get('/Granada/08-10-2020')
            .end( function(err,res){

            console.log(res.body)
            expect(res.body).to.have.property('Provincia').to.be.equal("Granada");
            expect(res).to.have.status(200);
            done();
        });
        });*/

        /*it('peticion get sobre datos incorrectos /nada/0', (done) => {
        chai.request(url)
            .get('/nada/0')
            .end( function(err,res){

            console.log(res.body)
            expect(res.body).to.have.property('contagiados').to.be.equal([]);//igual a nada ,, pensar respuesta json fail
            expect(res).to.have.status(200);
            done();
        });
        });*/
    });

});