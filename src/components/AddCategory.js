import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // String

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        // console.log('Submit Hecho');
        // setCategories

        if( inputValue.trim().length >= 2 ){
            setCategories( categories => [inputValue, ...categories] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>        
            <input 
                type="text"
                value={ inputValue }
                // onChange es parecido a el evento del teclado keydown
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

