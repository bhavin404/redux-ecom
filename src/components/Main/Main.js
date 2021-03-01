import React,{useState} from 'react'
import FilteredProducts from '../FilteredProducts/FilteredProducts';

import Products from '../Products/Products';
import './Main.css';

const Main = () => {

    const [filterList, setFilterList] = useState([])

    const onSearch = (e) => {
        const value = e.target.value;
        fetch(`https://fakestoreapi.com/products/category/${value}`)
             .then(res=>res.json())
             .then(json=>setFilterList(json))
        }


    console.log(filterList);

    return (
        <>
        <div className="navbar">
            <div className="logo">
                Logo
            </div>
            <div className="searchBar">
                    <select onChange={onSearch} className="dropDown">
                    <option  className="dropValue" value =" "> None </option>
                    <option  className="dropValue" value ="men clothing"> Men clothing  </option>
                    <option  className="dropValue" value ="jewelery">Jewelery </option>
                    <option  className="dropValue" value ="electronics">electrtonics </option>
                    <option  className="dropValue" value ="women clothing">women clothing </option>
                    </select>
                
               <input type="text" onChange={onSearch} placeholder='Search...' />  <img  alt="" srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"/>               

            </div>
            <div className="profile">
                <img  alt="" srcSet="https://img.favpng.com/12/18/15/shopping-cart-icon-png-favpng-e5DiMUYLNYaTjdsibphFUCAxC.jpg"/>
                <img alt="" srcSet="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                
            </div>
        </div>
        <Products/>
        
        {filterList  ?  <FilteredProducts filterList={filterList} /> : '' }        
        {/* <ProductDetails/> */}
        {/* <SingleProducts/> */}
        </>
    )
}

export default Main





