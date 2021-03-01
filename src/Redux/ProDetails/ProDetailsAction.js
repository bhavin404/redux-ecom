// import axios from "axios"
// import { FETCH_CATEGORIES } from "./ProDetailsType"



// export const fetchDetailsAction = (categories)=>{
//     return {
//         type: FETCH_CATEGORIES,
//         payload: categories
//     }
// }

// export const FetchingDetails = (categories)=>{

//     // const {categories} = useParams()

//     return (dispatch) =>{
//         axios.get(`https://fakestoreapi.com/products/category/${categories}`)
//             .then(res => {
//                 const categories = res.data
//                 dispatch(fetchDetailsAction(categories))
//             })

//     }
// }