import React from 'react'
import './Pagination.css'

const Pagination = ({postsPerPage, totalPosts,paginate}) => {

    const pageNumber = [];

    for (let i=1;i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i)
    }

    return (
        <div className="container1">
            <table>
             {pageNumber.map((number,index)=>(
                    
                    <th onClick={()=> paginate(number)} >{number}</th>
                
             ))}
            </table>
                
        </div>
    )
}

export default Pagination
