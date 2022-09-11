import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // String

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if( inputValue.trim().length >= 2 ){
            setCategories( categories => [inputValue, ...categories] );
            setInputValue('');
            console.log('Llegamos hasta aca!');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
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

