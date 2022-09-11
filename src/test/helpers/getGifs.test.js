import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', ()=>{

    test('Debe de traer 12 elementos', async() => {

        const gifs = await getGifs('One punch');
        expect( gifs.length ).toBe( 12 )
    });

    test('Debe de devolver 0 elementos', async()=>{
        
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 )
    });
    
})