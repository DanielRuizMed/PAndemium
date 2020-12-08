let chai = require('chai');
const expect = require('chai').expect;

//usamos chaihttp para hacer peticiones a la API
chai.use(require('chai-http'));

const { server } = require('../src/index.js')

describe('Test de integración ', () => {
    after(() => {
        server.close();
    });

    it('6.1.1 solicitud correcta de HU3 /Granada/2020-10-13', (done) => {
        chai.request(server)
            .get('/api/Granada/2020-10-13')
            .end( function(err,res){
                expect( res ).to.have.status(200);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('provincia').to.be.equal("Granada");;
                done();
            });
    });

    it('6.1.2 solicitud incorrecta de HU3 /Ganada/2020-10-13 (provincia mal o que no existe)', (done) => {
        chai.request(server)
            .get('/api/Ganada/2020-10-13')
            .end( function(err,res){
                expect( res ).to.have.status(404);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('status').to.be.equal("Error!");;
                done();
            });
    });

    it('6.1.3 solicitud incorrecta de HU3 /Granada/2020-10-131 (fecha mal o no existente)', (done) => {
        chai.request(server)
            .get('/api/Granada/2020-10-131')
            .end( function(err,res){
                expect( res ).to.have.status(404);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('status').to.be.equal("Error!");;
                done();
            });
    });
    
});