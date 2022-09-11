import { useEffect } from 'react';
import { Fragment } from 'react';

const ComponentePrueba = () => {

    const saludar = () => alert("Hello world");
    saludar();

    return (
        <Fragment>
            <h1 className="titulo" id='titulo' contentEditable={true}>Hola mundo desde Colom</h1>
            <p id="parr1">Esto es el primer parrafo</p>
            <p id="parr2">Este es el segundo parrafo</p>
            <b>Hola estoy en bold</b>

            <div className='anidado'>
                <p>Un parrafo</p>
                <h3>Un subtitulo</h3>
                <hr></hr>
                
                <input 
                    type='text' 
                    placeholder='Users'
                    className='userInput' 
                    value='Aca debe de ir el usuario'
                />
            </div>
        </Fragment>
    );
}

export default ComponentePrueba;