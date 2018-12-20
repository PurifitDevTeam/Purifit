import React from 'react';
import cart from '../../images/cart.jpg'

const NumbersSection = ({title,quantity,description,url})=>{


    return (
        <div className="col-sm-4">
            <img className="grid-image" src={url} alt="Icon-1" width="105px" height="80"/>
            <div className="number-section-container">
            <h1 className="grid-number-title">{quantity}</h1>
            <h2 className="grid-sub-title">{title} </h2>
            <p className="grid-desc">{description}</p>
            </div>
          </div>
    )
}


export default NumbersSection