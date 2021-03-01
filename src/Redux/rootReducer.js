import {combineReducers} from 'redux'
import { ProDetailsReducer } from './ProDetails/ProDetailsReducer'
import { ProductsReducer } from './ProductsReducer/ProductsReducer'


export const rootReducer = combineReducers({
    product: ProductsReducer,
    category: ProDetailsReducer
})