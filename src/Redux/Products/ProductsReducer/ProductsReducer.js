import { FETCH_PRODUCTS } from "../ProductsTypes/ProductsType"

const initialState = {
    products:[]
}

export const ProductsReducer =(state = initialState,action) =>{
    switch(action.type){
        case FETCH_PRODUCTS : return {
            products: action.payload
        }
        default : return state
    }

}

