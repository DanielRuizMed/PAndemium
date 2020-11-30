//Requerimos paquetes
let chai = require('chai');
const expect = require('chai').expect;

const ListadoContagios = require('./ListadoContagios.js');

describe('Tes sobre método contagios_total', () => {

    it('4.1 pasando una comunidad autonoma que existe', function() {

        expect( ListadoContagios.contagios_total("Andalucia") ).to.have.property('ccaa').to.be.equal("Andalucia");
    });

    it('4.2 pasando una comunidad autonoma que no existe', function() {

        expect( ListadoContagios.contagios_total("Andaluca") ).to.throw("fecha mal o provincia vacia");
    });

});