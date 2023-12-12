import React, {useEffect, useState} from 'react';
import {FcEmptyTrash} from "react-icons/fc";
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, deleteFromBasket, increaseQuantity} from "../../../redux/ActionCreatos/BasketAction";
import basket from "./index";
import {ADD_TO_BASKET} from "../../../redux/Reducer/ActionTypes";

 const BasketRow = ({el}) => {

    const {currencies,defaultCurrency} = useSelector(s => s.main)
    const dispatch = useDispatch()

    return (
        <tr className="bg-white dark:bg-gray-800 mb-[100px]">
            <th scope="row" className="px-6 py-4 font-medium bg-blue-300 text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <td className='px-6 bg-blue-300 py-4'>
                <img src={el.category.image} width={45} alt=""/>
            </td>
            <td className="px-6 bg-blue-300 flex items-center  py-10">
                <span onClick={()=>dispatch(increaseQuantity(el.id))}
                    className={`px-2 cursor-pointer text-xl ${el.quantity > 1? 'text-cyan-900' : "opacity-5"}`}>
                    <AiOutlineMinus/>
                </span>
                <h2>{el.quantity}</h2>
                <span onClick={() => dispatch(addToBasket(el)) }
                    className='px-2 cursor-pointer text-xl text-cyan-900'>
                    <AiOutlinePlus/>
                </span>
            </td>
            <td className="px-6 bg-blue-300 py-4 ">
                {el.price * el.quantity * currencies[defaultCurrency]}{defaultCurrency}
            </td>
            <td className="px-6 bg-blue-300 text-lg my-4">
                <FcEmptyTrash onClick={()=>dispatch(deleteFromBasket(el.id))}
                    className='cursor-pointer'/>
            </td>
        </tr>
    );
};

export default BasketRow;