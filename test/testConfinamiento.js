//Requerimos paquetes
let chai = require('chai');
const expect = require('chai').expect;

const ListadoContagios = require('./ListadoContagios.js');

describe('Tes sobre método confinamiento', () => {

    it('5.1 pasando una comunidad autonoma que existe', function() {

        expect( ListadoContagios.confinamiento("Andalucia") ).to.have.property('ccaa').to.be.equal("Andalucia");
    });

    it('5.2 pasando una comunidad autonoma que no existe', function() {

        expect( ListadoContagios.confinamiento("Andaluca") ).to.throw("fecha mal o provincia vacia");
    });

});