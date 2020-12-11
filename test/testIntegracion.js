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
    
    it('6.2.1 solicitud correcta de HU4,HU5 PUT /Juan/Granada/contagiados', (done) => {
        chai.request(server)
            .put('/api')
            .set("content-type","application/json")
            .send({ nick : "Juan", provincia : "Granada", estado : "contagiados"})
            .end( function(err,res){
                expect( res ).to.have.status(200);
                expect( res ).to.be.json;
                done();
            });
    });
    
    it('6.2.2 solicitud incorrecta de HU4,HU5 PUT /Juan/Grnada/contagiados (provincia mal o que no existe)', (done) => {
        chai.request(server)
            .put('/api')
            .set("content-type","application/json")
            .send({ nick : "Juan", provincia : "Grnada", estado : "contagiados"})
            .end( function(err,res){
                expect( res ).to.have.status(404);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('status').to.be.equal("Error!");
                done();
            });
    });
    
    it('6.2.3 solicitud correcta de HU4,HU5 PUT /Juan/Jaen/contagiados (cambiando provincia que si existe)', (done) => {
        chai.request(server)
            .put('/api')
            .set("content-type","application/json")
            .send({ nick : "Juan", provincia : "Jaen", estado : "contagiados"})
            .end( function(err,res){
                expect( res ).to.have.status(200);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('status').to.be.equal("200");
                done();
            });
    });
    
    it('6.2.4 solicitud correcta de HU4,HU5, creando un nuevo usuario PUT /Pablo/Jaen/sin_sintomas', (done) => {
        chai.request(server)
            .put('/api')
            .set("content-type","application/json")
            .send({ nick : "Pablo", provincia : "Jaen", estado : "sin_sintomas"})
            .end( function(err,res){
                expect( res ).to.have.status(200);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('status').to.be.equal("200");
                done();
            });
    });

    it('6.3.1 solicitud correcta de HU6 /total_contagios/Andalucia', (done) => {
        chai.request(server)
            .get('/total_contagios/Andalucia')
            .end( function(err,res){
                expect( res ).to.have.status(200);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('ccaa').to.be.equal("Andalucia");
                done();
            });
    });
    
    it('6.3.2 solicitud incorrecta de HU6 /total_contagios/Adalucia', (done) => {
        chai.request(server)
            .get('/total_contagios/Adalucia')
            .end( function(err,res){
                expect( res ).to.have.status(404);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('status').to.be.equal("Error!");
                done();
            });
    });

    it('6.4.1 solicitud correcta de HU7 /confinamiento/Andalucia', (done) => {
        
        chai.request(server)
            .get('/confinamiento/Andalucia')
            .end( function(err,res){
                expect( res ).to.have.status(200);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('ccaa').to.be.equal("Andalucia");
                done();
            });
            setTimeout(done, 2000);
    });
    
    it('6.4.2 solicitud incorrecta de HU7 /confinamiento/Adalucia', done => {
        
        chai.request(server)
            .get('/confinamiento/Adalucia')
            .end( function(err,res){
                expect( res ).to.have.status(404);
                expect( res ).to.be.json;
                expect( res.body ).to.be.property('status').to.be.equal("Error!");
                done();
            });
        setTimeout(done, 2000);
    });
});