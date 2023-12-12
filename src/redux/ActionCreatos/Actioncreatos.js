import {
    ADD_and_DELETE_FAVORITES,
    ADD_TO_BASKET,
    ADD_TO_FAVORITES,
    CHOOSE_THE_CURRENCY,
    DELETE_BASKET, GET_ONE_PRODUCS, GET_PRODUCS,
    INCREASE_QUANTITY,GET_PRODUCS_PAGE
} from "../Reducer/ActionTypes";
import producs from "../../components/page/Producs";
import axios from "axios";
import search from "../../components/Search/Search";

export const getProducs = (data) =>{
    return async  (dispatch) =>{
        try {
            const res = await axios(`https://fakestoreapi.com/products`)
            const {data} = await res
            console.log(res.data)


            dispatch({type:GET_PRODUCS,payload:data})
        }catch (e){
            console.log(e)
        }
    }
}


export const getOneProducs = (id) =>{
    return async  (dispatch) =>{
        try {
            const res = await axios(`https://fakestoreapi.com/products/${id}`)
            const {data} = await res
            console.log(data)
            dispatch({type:GET_ONE_PRODUCS ,payload:data})
        }catch (e){
            console.log(e)
        }
    }

}



export const chooseCurrency = (e) => {
    let currency = e.target.value
    localStorage.setItem('currency',currency)
  return {type: CHOOSE_THE_CURRENCY,payload:e.target.value}
}


