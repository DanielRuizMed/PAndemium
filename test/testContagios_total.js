//Requerimos paquetes
let chai = require('chai');
const expect = require('chai').expect;

const ListadoContagios = require('../src/class/ListadoContagios');
const Contagios = new ListadoContagios("../json/provincias.json");

describe('Tes sobre método contagios_total', () => {

    it('4.1 pasando una comunidad autonoma que existe', function() {
        expect( Contagios.contagios_total("Andalucia") ).to.have.property('ccaa').to.be.equal("Andalucia");
    });

    //it('4.2 pasando una comunidad autonoma que no existe', function() {

    //    expect( Contagios.contagios_total.bind("Andaluca") ).to.throw("Esa comunidad autonoma no existe");
    //});

});