import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import BasketRow from "./BasketRow";

const BasketTable = () => {
    const {currencies,defaultCurrency} = useSelector(s=>s.main)
    const {basket} = useSelector(s => s.basket)
    const totalPrice = basket.reduce((acc,el)=>{
        return acc + el.price * el.quantity
    },0) * currencies[defaultCurrency]
    return (
        <>
            <table className="w-full text-sm text-left  text-gray-800 dark:text-gray-600">
                <thead className="text-xs text-gray-700  uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 text-red-800 rounded-l-lg bg-blue-400">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3 text-red-800 bg-blue-400">
                        image
                    </th>
                    <th scope="col" className="px-6 py-3 text-red-800 bg-blue-400">
                        Qty
                    </th>
                    <th scope="col" className="px-6 text-red-800 py-3 bg-blue-400">
                        Price <span className='text-yellow-600'>({defaultCurrency})</span>
                    </th>
                    <th scope="" className="px-6 py-3 text-lg rounded-r-lg bg-blue-400">

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketRow el={el}/>)
                }
                </tbody>
                <tfoot className='rounded-lg '>
                <tr className="bg-white dark:bg-black mb-[100px]">
                    <th scope="row" className="px-6 py-3 bg-blue-400 text-base">Total:</th>
                    <td className="px-6 py-3 bg-blue-400"></td>
                    <td className="px-6 py-3 bg-blue-400"></td>
                    <td className="px-6 py-3 bg-blue-400 flex"><h2>{totalPrice}</h2><h2>{defaultCurrency}</h2></td>
                    <td className="px-6 py-3 bg-blue-400"></td>
                </tr>
                </tfoot>
            </table>
        </>
    );
};

export default BasketTable;