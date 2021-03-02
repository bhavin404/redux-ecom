import React from 'react'

const FilteredProducts = ({filterList}) => {
    return (
        <div className='container'>

        {filterList.filteredProducts.map((product, index) =>
            <div key={product.id} className="cards">
                <div className="img">
                    <img alt="" srcSet={product.image}/>
                </div>
                <div className="title">
                <h4>{product.category}</h4>
                <h5>{product.title.slice(0,20)}</h5>
                </div>
                <div className="description">
                    <p>{product.description.slice(0,80)}</p>
                </div>

                <div className="btn">
                    <b>Rs : {product.price}/-</b>
                    <button className="add-btn">Add to cart</button>
                </div>

            </div>
        )}

    </div>
    )
}

export default FilteredProducts
