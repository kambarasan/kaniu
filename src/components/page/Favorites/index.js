import React from 'react';
import ProducCard from "../ProducCard";
import {useSelector} from "react-redux";

const Favorites = () => {
    const {favorites} = useSelector(state => state.favorites)
    return (
        <div className='container'>
            <div className='flex flex-wrap  py-16'>
                {
                    favorites.map(el=>(
                        <ProducCard producs={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorites;