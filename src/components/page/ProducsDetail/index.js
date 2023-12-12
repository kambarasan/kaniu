import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneProducs} from "../../../redux/ActionCreatos/Actioncreatos";
import {useParams} from "react-router-dom";

const ProducsDetail = () => {
   const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getOneProducs(id))
    },[dispatch])
    const detail = useSelector(s => s.main.onePruducs)
    return (
        <div className='container flex items-start'>
            <img className='w-80 pt-5' src={detail.image} alt=""/>
            <div className='my-20 mx-10'>
                <h1 className='font-bold text-3xl my-5'>{detail.title}</h1>
                <p>{detail.description}</p>
            </div>
        </div>
    );
};

export default ProducsDetail;