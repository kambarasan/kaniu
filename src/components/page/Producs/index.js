import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProducCard from "../ProducCard";
import {getProducs, } from "../../../redux/ActionCreatos/Actioncreatos";
import axios from "axios";

const Producs = () => {
    const dispatch = useDispatch()
    const {producs} = useSelector((s)=>s.main)
    const [total_pages,setTotal_pages] = useState(1)
    const [pages,setPage] = useState(1)



    useEffect(()=>{
        dispatch(getProducs())

    },[pages])

    return (
        <div className='container'>
            <div className='flex flex-wrap justify-between  py-16'>
                {
                    producs.map(el=>(
                        <ProducCard producs={el}/>
                    ))
                }
            </div>
            <div className='flex justify-around items-center mb-[100px] flex-col'>
                {   <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <button onClick={() => setPage(pages - 1)} className='page-btn'>prev</button>
                    <button onClick={() =>  setPage(pages + 1)} className='page-btn'>next</button>
                </div>
                }
            </div>
        </div>
    );
};

export default Producs;