import React, { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);


    return (
        <Fragment>
            <h2>Gif Expert App</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr></hr>

            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;

