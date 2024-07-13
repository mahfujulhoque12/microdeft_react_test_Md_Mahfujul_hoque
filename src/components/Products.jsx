import axios from 'axios';
import React, { useEffect, useState } from 'react';
import flower from '../img/1.png'
import flower2 from '../img/2.png'
import flower3 from '../img/3.png'


const Products = () => {
    const productUrl='https://react-interview.1putym.easypanel.host/api/product'
    const [proucts,setProducts]=useState()
    // useEffect(()=>{
    //     axios.post(productUrl)
    //     .then((res)=>console.log('products',res.data))
    // },[])
    
    return (
        <div className='container'>
            <h1 className='text-center mt-5 text-info text-capitalize'>Here is all Products desing</h1>
            <div className="row">
            <div className='col-md-4'>
                <div className="products">
                <img className='images' src={flower} alt="" />
                <h1 className='title'>This is rose flower</h1>
                <p className='des'>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum id ducimus magnam magni tempora placeat omnis corrupti molestiae impedit!</span></p>
                <div className="discount">
                <p className='price'>Price: <span><del>250Tk</del></span></p>
                <p className='new-price'> New Price: <span>200TK</span></p>
            
                </div>
                <button className='bye'>Bye Now</button>

                </div>
         
            </div>
            <div className='col-md-4'>
                <div className="products">
                <img className='images' src={flower2} alt="" />
                <h1 className='title'>This is rose flower</h1>
                <p className='des'>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum id ducimus magnam magni tempora placeat omnis corrupti molestiae impedit!</span></p>
                <div className="discount">
                <p className='price'>Price: <span><del>250Tk</del></span></p>
                <p className='new-price'> New Price: <span>200TK</span></p>
            
                </div>
                <button className='bye'>Bye Now</button>

                </div>
         
            </div>
            <div className='col-md-4'>
                <div className="products">
                <img className='images' src={flower3} alt="" />
                <h1 className='title'>This is rose flower</h1>
                <p className='des'>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum id ducimus magnam magni tempora placeat omnis corrupti molestiae impedit!</span></p>
                <div className="discount">
                <p className='price'>Price: <span><del>250Tk</del></span></p>
                <p className='new-price'> New Price: <span>200TK</span></p>
            
                </div>
                <button className='bye'>Bye Now</button>

                </div>
         
            </div>
            </div>
          
        </div>
    );
};

export default Products;