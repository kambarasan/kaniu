import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AiTwotoneHeart} from 'react-icons/ai'
import AddToBasketBtn from "../../ui/AddToBasketBtn/AddToBasketBtn";
import NavigationToBasket from "../../ui/NavigationToBasket";
import AddToFovoritesBtn from "../../ui/AddToFovoritesBtn";
import {likedToBasket} from "../../../redux/ActionCreatos/FavoritesAction";
import {Link} from "react-router-dom";
import { CiSquareRemove } from "react-icons/ci";


const ProducCard = ({producs}) => {
    const [isLiked,setIsLiked] = useState(false)
    const dispatch = useDispatch()
    const { currencies,defaultCurrency} = useSelector(s=>s.main)
    const {basket} = useSelector(s => s.basket)
    const foundProducs = basket.some(el=>el.id === producs.id)
    // const [modal,setModal] = useState(false)



    const likedFn = () =>{
        dispatch(likedToBasket(producs))
        if (!producs.isLiked){
            setIsLiked(true)
            setTimeout(()=>setIsLiked(false),1000)
        }
    }

    return (

        <div className=" kon max-w-sm bg-white basis-1/5 mx-2 my-5 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className='imh'>
                <Link to={`/${producs.id}`} >
                    <img  className="rounded-t-lg" src={producs.images} alt=""/>
                </Link>
                {/*onClick={() => setModal(true)}*/}
                {/*<div className={`${modal ? 'modal' : 'hidden'}  konan`}>*/}
                {/*    <img className="rounded-t-lg" src={producs.image} alt=""/>*/}
                {/*    <button onClick={() => setModal(false)} className='wed'><CiSquareRemove className='al'/></button>*/}
                {/*</div>*/}
                <AiTwotoneHeart className={`absolute ${isLiked ? 'scale-1' : 'scale-0'} transition-[.1s] top-[50%] left-[45%] text-red-600 text-4xl rotate-[-12deg]`}/>
            </div>
            <div className="p-5 text-center">
                <a >
                    <h5 className="mb-2 text-xl text-[15px]  font-bold tracking-tight text-gray-900 dark:text-white">{producs.title}</h5>
                </a>
                <p className="mb-3 font-normal text-[11px] text-gray-700 dark:text-gray-400">{producs.price * currencies[defaultCurrency]}{defaultCurrency}</p>

                    <div className='flex items-center'>
                                <AddToFovoritesBtn producs={producs}/>

                        {
                            foundProducs ? <NavigationToBasket/>
                                :
                                <AddToBasketBtn producs={producs}/>
                        }
                    </div>

            </div>
        </div>

    );
};

export default ProducCard;