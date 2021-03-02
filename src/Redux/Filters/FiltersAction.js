import axios from "axios"
import { FILTER_PRODUCTS } from "./FiltersType"

export const filterAction =(filteredProducts) =>{
    return {
        type : FILTER_PRODUCTS,
        payload : filteredProducts
    }
}

export const filteringProducts = (value) =>{
    console.log(value)
    return(dispatch) =>{
        axios.get(`https://fakestoreapi.com/products/category/${value}`)
        .then(res => {
            const filteredProducts = res.data;
            dispatch(filterAction(filteredProducts))
        })
    }
}