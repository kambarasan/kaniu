import React from 'react';
import {SlBasketLoaded} from "react-icons/sl";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../../redux/ActionCreatos/BasketAction";

const AddToBasketBtn = ({producs}) => {
    const dispatch = useDispatch()

    return (
        <button onClick={()=> dispatch(addToBasket(producs))}
                className="text-white flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-[12px] px-3 py-2 text-center mr-2 mb-2">
            добавит в &nbsp; <SlBasketLoaded/>
        </button>
    );
};

export default AddToBasketBtn;