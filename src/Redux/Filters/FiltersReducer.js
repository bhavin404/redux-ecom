import { FILTER_PRODUCTS } from "./FiltersType"


    const initialState ={
        filteredProducts:[]
    }

export const Filters_Reducer =(state=initialState, action) =>{

    switch(action.type){

        case FILTER_PRODUCTS : return{
            filteredProducts: action.payload
        }
        default : return state
    }
}