import React from 'react'
import './SingleProduct.css'

const SingleProduct = ({apiLink}) => {
    return (
        <div className="main-container">
            
            <div className="container12">
               
                <div className="image">
                    <img src={apiLink.image} alt="" srcset=""/>
                </div>
               
                <div className="detailss">
                    <div className="category">
                        <h1>{apiLink.category}</h1>
                    </div>
                    <div className="title">
                        <h3>{apiLink.title}</h3>
                    </div>
                    <div className="description">
                        <p>{apiLink.description}</p>
                    </div>

                    <div className="btn1">
                        <b>Rs: {apiLink.price}/-</b>
                        <button>Add to cart</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct
