import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"
import ProducCard from "../page/ProducCard";

const Search = () => {
    const {movieName} = useParams()
    const [names,setNames] = useState([])

    const getSearch =() =>{
        axios(`https://api.escuelajs.co/api/v1/products/${movieName}`)
            .then((res)=>setNames(res.data))
    }

    useEffect(() =>{
        getSearch()
    },[names])
    console.log(names)
    return (
        <div id='popular'>
            <div className="container">
                <div className="popular">
                    {
                        names.map((el)=> <ProducCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;