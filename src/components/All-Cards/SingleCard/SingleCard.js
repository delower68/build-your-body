import React from 'react';
import './SingleCard.css'
const SingleCard = (props) => {
    // console.log(props);

    const {name , img , time} = props.product
    return (
        <div>
            <img src={img} alt="" ></img>
        </div>
    );
};

export default SingleCard;