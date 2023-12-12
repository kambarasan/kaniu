import {
    ADD_and_DELETE_FAVORITES,
    ADD_TO_BASKET,
    ADD_TO_FAVORITES, CHOOSE_THE_CURRENCY,
    DELETE_BASKET, GET_ONE_PRODUCS,
    GET_PRODUCS,
    INCREASE_QUANTITY,GET_PRODUCS_PAGE
} from "./ActionTypes";

const initialState={
    producs:[],
    onePruducs:{},
    currencies:{
        SOM:84,
        $:1,
        RUB:68,
        TENGE:462,
        SUM:11290
    },
    defaultCurrency: localStorage.getItem('currency') || '$'
}
export const MainReducer = (state=initialState,action)=>{
    switch (action.type){
        case GET_PRODUCS :
            return {...state,producs: action.payload}

        case GET_ONE_PRODUCS:{
                return {...state, onePruducs: action.payload}
            }
            case GET_PRODUCS_PAGE:{
                return {...state, onePruducsPAGE: action.payload}
            }

        case CHOOSE_THE_CURRENCY :
            return {...state, defaultCurrency: action.payload}
        default:
            return state
    }
}