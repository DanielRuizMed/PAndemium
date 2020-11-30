//Requerimos paquetes
let chai = require('chai');
const expect = require('chai').expect;

const ListadoContagios = require('../src/class/ListadoContagios');
const Contagios = new ListadoContagios("../json/provincias.json");

describe('Tes sobre método confinamiento', () => {

    it('5.1 pasando una comunidad autonoma que existe', function() {

        expect( Contagios.confinamiento("Andalucia") ).to.be.equal("confinada");
    });

    //it('5.2 pasando una comunidad autonoma que no existe', function() {

    //    expect( Contagios.confinamiento.bind("Andaluca") ).to.throw("Esa comunidad autonoma no existe");
    //});

});