import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

/* los custom hooks funcionan como funcional components 
peden tener las mismas funcionalidades */

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( ()=> {

        getGifs( category )
            .then( imgs => {
                    
                setState({
                    data: imgs,
                    loading: false
                });

            })
    }, [category]);

    return state; // { data: [ imgs ], loading: true };
}