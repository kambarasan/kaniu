import React, {useState} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseCurrency} from "../../redux/ActionCreatos/Actioncreatos";

const Header = ({dark,setDark}) => {
    const dispatch = useDispatch()
    const {defaultCurrency} = useSelector(s=>s.main)
    const selectValue = {
        $:'USA',
        RUB:'RUB',
        SOM:'KGZ',
        TENGE:'KZT',
        SUM:'UZS'
    }
    const [search,setSearch] = useState("")
    const nav = useNavigate()
    return (
        <header>
            <nav className="bg-white bg-blue-400 border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                             alt="KANIU STORE Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KANIU STORE</span>
                    </Link>
                    <div className="flex items-center  lg:order-2">
                        <select  onChange={(e)=>dispatch(chooseCurrency(e))} id="countries "
                                className="bg-gray-50 bg-blue-400  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                Object.keys(selectValue).map(el=>(
                                    <option value={el} selected={defaultCurrency === el}>{selectValue[el]}</option>
                                ))
                            }
                            {/*<option className='bg-blue-400' value="$">USA</option>*/}
                            {/*<option className='bg-blue-400' value="RUB">RUB</option>*/}
                            {/*<option className='bg-blue-400' value="SOM" selected>KGZ</option>*/}
                            {/*<option className='bg-blue-400' value="TENGE">KZT</option>*/}
                            {/*<option className='bg-blue-400' value="SUM">UZS</option>*/}
                        </select>

                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <div className="flex flex-col Header-menu mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                                <NavLink  to="/"
                                          className="block py-2 pr-4 pl-3 text-xl text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                   aria-current="page">Home</NavLink>


                                <NavLink to="/favorites"
                                   className="block py-2 pr-4 pl-3 text-xl text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Favorites</NavLink>

                                <NavLink to="/basket"
                                   className="block py-2 pr-4 pl-3 text-xl text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Basket</NavLink>
                        </div>
                        <div className='header--search'>
                            <input onChange={(event) => setSearch(event.target.value)} type="text"/>
                            <button onClick={() => nav(`/movie/search/${search}`)}>search</button>
                            <button onClick={() => setDark(!dark)}>dark</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;