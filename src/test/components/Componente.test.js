import { shallow } from 'enzyme';
import React from 'react';
import ComponentePrueba from '../../components/ComponentePrueba';

describe("Pruebas en <Componente />",()=>{

    test("Primera Prueba",()=>{
        const wrapper = shallow(<ComponentePrueba />);
        const primerParrafoParr1 = wrapper.find("#parr1").text();
        const segundoParrafoParr2 = wrapper.find("#parr2").text();
        const propsWrapper = wrapper.props();
        const userInput = wrapper.find(".userInput").props();
        const cantidadParrafos = wrapper.find("p").length;

        const primerParrafoo = wrapper.find("p").at(0).text();
        const segundoParrafoo = wrapper.find("p").at(1).text();
        const tercerParrafoo = wrapper.find("p").at(2).text();

        const validar = wrapper.find("div").exists();

        console.log( `Primer parrafo: ${primerParrafoo}` );
        console.log( `Segundo parrafo: ${segundoParrafoo}` );
        console.log( `Tercer parrafo: ${tercerParrafoo}` );

        // console.log( cantidadParrafos );
        wrapper.find().exists();
        let contador = 0;
        Object.keys( userInput ).forEach( () => contador++ );
        
        expect( !validar ).not.toBe( true );
        expect( wrapper.find('b').exists() ).toBe( true );  
        expect( contador ).toBe( 4 );
        expect( wrapper ).toHaveBeenCalled( 1 );
        
        // console.log( propsWrapper );
        // console.log( typeof userInput );

        // console.log( primerParrafo );
        // console.log( segundoParrafo );
    });
})