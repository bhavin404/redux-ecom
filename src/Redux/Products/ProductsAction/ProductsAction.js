import axios from "axios"
import { FETCH_PRODUCTS } from "../ProductsTypes/ProductsType"

export const fetchProductsAction = products =>{
    return {
        type : FETCH_PRODUCTS,
        payload: products
    }
}

export const fetchingProducts = () =>{
    return (dispatch) =>{
        axios.get('https://fakestoreapi.com/products')
            .then( res => {
                const products = res.data
                dispatch(fetchProductsAction(products))
             })
            .catch(err => alert(err))
    }
}