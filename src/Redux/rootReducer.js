import {combineReducers} from 'redux'
import { ProductsReducer } from '../Redux/Products/ProductsReducer/ProductsReducer';
import { Filters_Reducer } from './Filters/FiltersReducer';



export const rootReducer = combineReducers({
    product: ProductsReducer,
    filter : Filters_Reducer
})