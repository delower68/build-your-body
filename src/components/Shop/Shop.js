import './Shop.css';
import React,{ useEffect, useState } from 'react';
import Activity from '../Activity/Activity'
import SingleCard from '../All-Cards/SingleCard/SingleCard';
import QuestionAnswer from '../Question&Answer/QuestionAnswer';



const Shop = () => {
    const [products , setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([])

    useEffect(()=>{
        fetch('records.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    const handelAddToCart=(product) =>{
        const newSingleProduct = [...singleProduct , product];
        setSingleProduct(newSingleProduct);
    }

    return (
        <div>
            <div>
            <h1>Build Your Body</h1>
               <h2>Select today’s exercise:</h2>
            </div>
            <div className="shop-container">
            <div className="product-container">
                
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
            </div>
            <div className='question-and-answer'>
            <QuestionAnswer/>
            </div>        
        </div>
    );
};

export default Shop;