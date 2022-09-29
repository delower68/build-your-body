// import React from 'react';
import './Shop.css';
import React,{ useEffect, useState } from 'react';
import Activity from '../Activity/Activity'
import SingleCard from '../All-Cards/SingleCard/SingleCard';
import { addToDb, getStoredCart } from '../../fakeDb';



const Shop = () => {
    const [products , setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([])

    useEffect(()=>{
        fetch('records.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
        // for localStorage 
    useEffect(()=>{
        const storedCart = getStoredCart()
        // console.log(storedCart);
        for(const _id in storedCart){
            console.log(_id);
        }
    },[])

    const handelAddToCart=(product) =>{
        // console.log(product);
        const newSingleProduct = [...singleProduct , product];
        setSingleProduct(newSingleProduct)

        addToDb(product._id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1>Build Your Body: {products.length}</h1>
               <h2>Select today’s exercise</h2>
               <button target={'_blank'} className='interView-qs'>Question And Answer</button>
               {
                products.map(product => <SingleCard
                    key={product._id}
                    product = {product}
                    handelAddToCart={handelAddToCart}
                    ></SingleCard>)
               }

            </div>
            <div className="activity-container">
               <Activity singleProduct={singleProduct}></Activity>
            </div>
            <div className='question-and-answer'>

            </div>        
        </div>
    );
};

export default Shop;