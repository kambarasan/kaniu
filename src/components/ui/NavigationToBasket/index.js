import React from 'react';
import {SlBasketLoaded} from "react-icons/sl";
import {useNavigate} from "react-router-dom";

const NavigationToBasket = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/basket')}
                className="text-gray-900 flex items-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2">
            перейти в &nbsp;<SlBasketLoaded/>
        </button>
    );
};

export default NavigationToBasket;