import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import './Products.css'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import {fetchingProducts} from '../../Redux'





const Products = ({ filterList,fetchingProducts,productData }) => {


    //state for products
    // const [products, setProducts] = useState([])


    useEffect(() => {

        fetchingProducts()

        // fetch('https://fakestoreapi.com/products')
        //     .then(res => res.json())
        //     .then(json => setProducts(json))

    }, [])

    console.log(productData)

    //logic for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)

    const onPaginate = (pageNumber) => {
        setCurrentPage(pageNumber)

    }

    //Get Current posts
    const indexOfLastPost = currentPage * postsPerPage  // 1 x 8
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = productData.products.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
            <div className='container'>

                <div className="cardContainer">

                    {currentPosts.map((product, index) =>

                        <Link className="link" to={`/ProductDetails/${product.category}/${product.id}`}>
                            <div key={product.id} className="cards">
                                <div className="img">
                                    <img alt="" srcSet={product.image} />
                                </div>
                                <div className="title">
                                    <h4>{product.category.toUpperCase()}</h4>
                                    <h5>{product.title.slice(0, 20)}</h5>
                                </div>
                                <div className="description">
                                    <p>{product.description.slice(0, 80)}</p>
                                </div>

                                <div className="btn">
                                    <b>Rs : {product.price}/-</b>
                                    <button className="add-btn">Add to cart</button>
                                </div>

                            </div>
                        </Link>

                    )}

                </div>


                <Pagination paginate={onPaginate} postsPerPage={postsPerPage} totalPosts={productData.products.length} />

            </div>

        </>
    )
}

const mapStateToProps = state =>{
    return {
        productData: state.product 
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchingProducts : () => dispatch(fetchingProducts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
