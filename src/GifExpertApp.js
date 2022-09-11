import React, { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = ({ defaultCategories = ['Rick and Morty'] }) => {

    const [categories, setCategories] = useState( defaultCategories );

    return (
        <Fragment>
            <h2>Gif Expert App</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr></hr>

                {
                    categories.map( category =>  (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
        </Fragment>
    )
}

export default GifExpertApp;

