import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";
import {Link} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(s=>s.basket)


    return (

      <div className='container'>
          <div className="relative my-14 lll  overflow-x-auto ">
              {
                  basket.length ? <BasketTable/>  :
                      <div className='text-center text-3xl text-red-800'>
                          EMPTY BASKET
                          <Link to='/'>
                                  <div
                                      className='flex text-red-800 text-3xl justify-center my-20 border-2 h-16 dark:bg-gray-800 mx-auto  text-xl text-gray-800 rounded-lg border-gray-200  items-center w-[30%] '>
                                      ADD PRODUCTS +
                                  </div>
                          </Link>
                      </div>

              }
          </div>
      </div>

    );
};

export default Basket;