import React from 'react';
import {AiTwotoneHeart} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {FaTrash} from 'react-icons/fa'
import {addToFovorites} from "../../../redux/ActionCreatos/FavoritesAction";

const AddToFovoritesBtn = ({producs}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(state => state.favorites)

    const found = favorites.some(el => el.id === producs.id)
    return (
        <button onClick={()=>dispatch(addToFovorites(producs))}
                className={`${found ? 'text-red-800' : 'text-white'}  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2`}>
            {
                producs.isLiked ? <FaTrash className='text-white'/> :<AiTwotoneHeart/>

            }
        </button>
    );
};

export default AddToFovoritesBtn;