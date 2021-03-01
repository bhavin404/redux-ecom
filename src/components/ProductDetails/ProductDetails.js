import React,{useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import SingleProduct from '../SingleProduct/SingleProduct'
import './ProductDetails.css'

import {connect} from 'react-redux'
import { FetchingDetails } from '../../Redux'


const ProductDetails = ({FetchingDetails,categoryData}) => {
    const {id,categories} = useParams()


    const [category, setCategory] = useState([])
    const [apiLink, setApiLink] = useState({})


    useEffect(() => {

        // FetchingDetails(categories)
        fetch(`https://fakestoreapi.com/products/category/${categories}`)
        .then(res=>res.json())
        .then(json=>setCategory(json))
      }, [])

      useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setApiLink(json))
      }, [])
    


    return ( 
    <>
        <div className='Main-Container'>

            <SingleProduct apiLink={apiLink}/>
            {category.map((singleCategory) => 
            <div className="cardContainer1">

            <div  className="cards">
                <div className="img">
                    <img alt="" srcSet={singleCategory.image}/>
                </div>
                <div className="title">
                <h4>{singleCategory.category}</h4>
                <h5>{singleCategory.title.slice(0, 20)}</h5>
                </div>
                <div className="description">
                    <p>{singleCategory.description.slice(0, 80)}</p>
                </div>

                <div className="btn">
                    <b>Rs : {singleCategory.price}/-</b>
                    <button className="add-btn">Add to cart</button>
                </div>

            </div>
      

        </div>
            )}
            
        </div>

        </>
    )
}

const mapStateToProps = state =>{
    return{
        categoryData : state.category
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        FetchingDetails : () => dispatchEvent(FetchingDetails())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails)
