import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';  

describe('Pruebas en el componente <AddCategory />', ()=>{

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('Debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
    }); 
    
    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value )
    });

    test('NO debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled()
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
            const value = 'Hola mundo';
            
            // 1. Simular el inputChange
            const input = wrapper.find('input');
            input.simulate('change', { target: { value } });
            
            // 2. Simular el submit
            const form = wrapper.find('form');
            form.simulate('submit', { preventDefault(){} });
            
            // 3. setCategories se debe de haber llamado
            expect( setCategories ).toHaveBeenCalled();
            expect( setCategories ).toHaveBeenCalledTimes(1); // --> Con este metodo podemos saber expectar cuantas veces se ha ejecutado una funcion
            expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

            // 4. El valor del input debe de estar ''
            expect( input.prop('value') ).toBe( '' );


    });  
});

// describe('OTHER',()=>{
//     const setCategories = jest.fn();

//     test('Una prueba pequeña', () => {
//         const wrapper = shallow(<AddCategory setCategories={ setCategories }/>)

//         const valor = wrapper.find('p').text().trim()
//         const input = wrapper.find('input');
//         const value = 'Hola mundo'

//         input.simulate('change', {target: { value }})
//         console.log(input.prop('value'))

//         expect( wrapper ).toMatchSnapshot();
//     })
    
// })