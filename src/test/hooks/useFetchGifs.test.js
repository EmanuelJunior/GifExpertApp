import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        const { data:images, loading } = result.current;
        await waitForNextUpdate();

        expect( images ).toEqual([]);
        expect( loading ).toBe(true);
    });  
    
    test('Debe de retornar un arreglo de imgs y el loading false', async()=>{
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        await waitForNextUpdate();

        const { data:images, loading } = result.current;

        expect( images.length ).toBe( 12 );
        expect( loading ).toBe( false );

    });
})
