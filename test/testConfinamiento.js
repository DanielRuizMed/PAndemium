//Requerimos paquetes
let chai = require('chai');
const expect = require('chai').expect;

const pandemiun = require('../src/class/pandemiun')

//usamos chaihttp para hacer peticiones a la API
chai.use(require('chai-http'));
const url= 'https://confinamientopandemium.azurewebsites.net/api/Confinamiento';

describe('Tes sobre Mini-API confinamiento', () => {

    it('1.1 api?ccaa=Andalucía (provincia que si existe)', (done) => {
        chai.request(url).get('?ccaa=Andalucia').end(function(err,res){

            expect(res.body).to.have.property('result').to.equal("confinada");
            expect(res).to.have.status(200);
            done();
        })

    });

    it('1.2 api?ccaa=noexiste (provincia que no existe)', (done) => {
        chai.request(url).get('?ccaa=noexiste').end(function(err,res){

            expect(res.body).to.have.property('result').to.equal('No hay datos con esa comunidad o no existe');
            expect(res).to.have.status(200);
            done();
        })

    });

    it('1.3 api (No se pasa nada)', (done) => {
        chai.request(url).get('').end(function(err,res){

            expect(res.body).to.have.property('result').to.equal('Nos has puesto bien los atributos, ejemplo: ?ccaa=Andalucia.');
            expect(res).to.have.status(404);
            done();
        })

    });

    it('1.4 api?region=nose&pais=Francia (Cualquier cosa)', (done) => {
        chai.request(url).get('?region=nose&pais=Francia').end(function(err,res){

            expect(res.body).to.have.property('result').to.equal('Nos has puesto bien los atributos, ejemplo: ?ccaa=Andalucia.');
            expect(res).to.have.status(404);
            done();
        })

    });

});