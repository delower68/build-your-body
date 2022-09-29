import React, { useEffect, useState } from 'react';
import './Cards.css'
import SingleCard from './SingleCard/SingleCard';

const Cards = () => {
    const [products , setProducts] = useState([]);

    useEffect(()=>{
        fetch('records.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    const handelAddToCart=(product) =>{
        console.log(product);
    }
    return (
        <div className='card-container'>
            <div>
                <h1>Build Your Body: {products.length}</h1>
                <h2>Select today’s exercise</h2>
                {/* <button>Question And Answer</button> */}
            </div>
            <div className="singleCard">
                {
                    products.map(product => <SingleCard
                        key={product._id}
                        product = {product}
                        handelAddToCart={handelAddToCart}
                         ></SingleCard>)
                }
            </div>
        </div>
        
    );
};

export default Cards;