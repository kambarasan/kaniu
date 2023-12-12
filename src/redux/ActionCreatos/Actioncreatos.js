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
            const res = await axios(`https://api.escuelajs.co/api/v1/products/`)
            const {data} = await res
            console.log(res.data)
            // const data = [
            //     {
            //         id:1,
            //         title: 'Love Republic',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 4000,
            //         countInStock: 2,
            //         rating: 4,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
            //     },
            //
            //     {
            //         id:2,
            //         title: 'The Select Moscow ',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 2300,
            //         countInStock: 2,
            //         rating: 3,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
            //     },
            //     {
            //         id:3,
            //         title: 'A-A Awesome Apparel ',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 9000,
            //         countInStock: 2,
            //         rating: 5,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
            //     },
            //     {
            //         id:4,
            //         title: 'Jolifashn',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 5000,
            //         countInStock: 2,
            //         rating: 2,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
            //     },
            //     {
            //         id:5,
            //         title: 'Jolifashn',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 5000,
            //         countInStock: 2,
            //         rating: 1,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
            //     },
            //     {
            //         id:6,
            //         title: 'Jolifashn',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 5000,
            //         countInStock: 2,
            //         rating: 3,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
            //     },{
            //         id:7,
            //         title: 'Love Republic',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 4000,
            //         countInStock: 2,
            //         rating: 4,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
            //     },{
            //         id:8,
            //         title: 'Love Republic',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 4000,
            //         countInStock: 2,
            //         rating: 4,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
            //     }
            //
            // ]
        // const data = [
        //     {
        //         id:1,
        //         title: 'Iphone 14 Pro Max',
        //         description:'12+512Gb',
        //         price: 4000,
        //         image: 'https://www.myphone.kg/files/media/21/21685.webp'
        //     },
        //     {
        //         id:2,
        //         title: 'Iphone 14 Pro Max',
        //         description:'256Gb',
        //         price: 3500,
        //         image: 'https://www.myphone.kg/files/media/17/17219.webp'
        //     },
        //     {
        //         id:3,
        //         title: 'Samsung Galaxy S23 Ultra',
        //         description:'256Gb',
        //         price: 3500,
        //         image: 'https://www.myphone.kg/files/media/18/18966.webp'
        //     },
        //     {
        //         id:4,
        //         title: 'Xiaomi Poco F5 Pro',
        //         description:'12+256Gb',
        //         price: 3500,
        //         image: 'https://www.myphone.kg/files/media/20/20525.webp'
        //     },
        // ]
            dispatch({type:GET_PRODUCS,payload:data})
        }catch (e){
            console.log(e)
        }
    }
}


// const getPopular = () => {
//     axios().then((res)=>{
//         setTotal_pages(res.data.total_pages)
//         console.log(res.data)
//     })


// export const getProducsPages = (data,pages,total_pages, setTotal_pages) =>{
//     return async  (dispatch) =>{
//         try {
//             const res = await axios(`https://api.escuelajs.co/api/v1/products/?offset=0&limit=10`)
//             const {data} = await res
//             setTotal_pages(res.data.total_pages)
//             // const data = [
//             //     {
//             //         id:1,
//             //         title: 'Love Republic',
//             //         description: 'Вискоза - 80%, Полиэстер - 20%',
//             //         price: 4000,
//             //         countInStock: 2,
//             //         rating: 4,
//             //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
//             //     },
//             //
//             //     {
//             //         id:2,
//             //         title: 'The Select Moscow ',
//             //         description: 'Вискоза - 80%, Полиэстер - 20%',
//             //         price: 2300,
//             //         countInStock: 2,
//             //         rating: 3,
//             //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
//             //     },
//             //     {
//             //         id:3,
//             //         title: 'A-A Awesome Apparel ',
//             //         description: 'Вискоза - 80%, Полиэстер - 20%',
//             //         price: 9000,
//             //         countInStock: 2,
//             //         rating: 5,
//             //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
//             //     },
//             //     {
//             //         id:4,
//             //         title: 'Jolifashn',
//             //         description: 'Вискоза - 80%, Полиэстер - 20%',
//             //         price: 5000,
//             //         countInStock: 2,
//             //         rating: 2,
//             //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
//             //     },
//             //     {
//             //         id:5,
//             //         title: 'Jolifashn',
//             //         description: 'Вискоза - 80%, Полиэстер - 20%',
//             //         price: 5000,
//             //         countInStock: 2,
//             //         rating: 1,
//             //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
//             //     },
//             //     {
//             //         id:6,
//             //         title: 'Jolifashn',
//             //         description: 'Вискоза - 80%, Полиэстер - 20%',
//             //         price: 5000,
//             //         countInStock: 2,
//             //         rating: 3,
//             //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
//             //     },{
//             //         id:7,
//             //         title: 'Love Republic',
//             //         description: 'Вискоза - 80%, Полиэстер - 20%',
//             //         price: 4000,
//             //         countInStock: 2,
//             //         rating: 4,
//             //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
//             //     },{
//             //         id:8,
//             //         title: 'Love Republic',
//             //         description: 'Вискоза - 80%, Полиэстер - 20%',
//             //         price: 4000,
//             //         countInStock: 2,
//             //         rating: 4,
//             //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
//             //     }
//             //
//             // ]
//             // const data = [
//             //     {
//             //         id:1,
//             //         title: 'Iphone 14 Pro Max',
//             //         description:'12+512Gb',
//             //         price: 4000,
//             //         image: 'https://www.myphone.kg/files/media/21/21685.webp'
//             //     },
//             //     {
//             //         id:2,
//             //         title: 'Iphone 14 Pro Max',
//             //         description:'256Gb',
//             //         price: 3500,
//             //         image: 'https://www.myphone.kg/files/media/17/17219.webp'
//             //     },
//             //     {
//             //         id:3,
//             //         title: 'Samsung Galaxy S23 Ultra',
//             //         description:'256Gb',
//             //         price: 3500,
//             //         image: 'https://www.myphone.kg/files/media/18/18966.webp'
//             //     },
//             //     {
//             //         id:4,
//             //         title: 'Xiaomi Poco F5 Pro',
//             //         description:'12+256Gb',
//             //         price: 3500,
//             //         image: 'https://www.myphone.kg/files/media/20/20525.webp'
//             //     },
//             // ]
//             dispatch({type:GET_PRODUCS_PAGE,payload:data})
//         }catch (e){
//             console.log(e)
//         }
//     }


export const getOneProducs = (id) =>{
    return async  (dispatch) =>{
        try {
            const res = await axios(`https://api.escuelajs.co/api/v1/products/${id}`)
            const {data} = await res
            console.log(data)
            dispatch({type:GET_ONE_PRODUCS ,payload:data})
        }catch (e){
            console.log(e)
        }
    }

}

export const getProducsSearch = (data) =>{
    return async  (dispatch) =>{
        try {
            const res = await axios(`https://api.escuelajs.co/api/v1/products/`)
            const {data} = await res
            console.log(res.data)
            // const data = [
            //     {
            //         id:1,
            //         title: 'Love Republic',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 4000,
            //         countInStock: 2,
            //         rating: 4,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
            //     },
            //
            //     {
            //         id:2,
            //         title: 'The Select Moscow ',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 2300,
            //         countInStock: 2,
            //         rating: 3,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
            //     },
            //     {
            //         id:3,
            //         title: 'A-A Awesome Apparel ',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 9000,
            //         countInStock: 2,
            //         rating: 5,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
            //     },
            //     {
            //         id:4,
            //         title: 'Jolifashn',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 5000,
            //         countInStock: 2,
            //         rating: 2,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
            //     },
            //     {
            //         id:5,
            //         title: 'Jolifashn',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 5000,
            //         countInStock: 2,
            //         rating: 1,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
            //     },
            //     {
            //         id:6,
            //         title: 'Jolifashn',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 5000,
            //         countInStock: 2,
            //         rating: 3,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
            //     },{
            //         id:7,
            //         title: 'Love Republic',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 4000,
            //         countInStock: 2,
            //         rating: 4,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
            //     },{
            //         id:8,
            //         title: 'Love Republic',
            //         description: 'Вискоза - 80%, Полиэстер - 20%',
            //         price: 4000,
            //         countInStock: 2,
            //         rating: 4,
            //         image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
            //     }
            //
            // ]
            // const data = [
            //     {
            //         id:1,
            //         title: 'Iphone 14 Pro Max',
            //         description:'12+512Gb',
            //         price: 4000,
            //         image: 'https://www.myphone.kg/files/media/21/21685.webp'
            //     },
            //     {
            //         id:2,
            //         title: 'Iphone 14 Pro Max',
            //         description:'256Gb',
            //         price: 3500,
            //         image: 'https://www.myphone.kg/files/media/17/17219.webp'
            //     },
            //     {
            //         id:3,
            //         title: 'Samsung Galaxy S23 Ultra',
            //         description:'256Gb',
            //         price: 3500,
            //         image: 'https://www.myphone.kg/files/media/18/18966.webp'
            //     },
            //     {
            //         id:4,
            //         title: 'Xiaomi Poco F5 Pro',
            //         description:'12+256Gb',
            //         price: 3500,
            //         image: 'https://www.myphone.kg/files/media/20/20525.webp'
            //     },
            // ]
            dispatch({type:GET_PRODUCS,payload:data})
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


