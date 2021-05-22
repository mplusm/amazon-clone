import React from 'react'
import "./Checkout.css";
import "./Subtotal.css";

function Checkout() {
    return (
        <div className ="checkout">
            <div className="checkout__left">
                <img className="checkout__sd" src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg"
                alt=""
                />

                <div> 
                <h2 className ="checkout__title">Shopping Basket
                </h2>
                </div>
                
                <div className="checkout__right">
                    <Subtotal/>
                    <h2>Subtotal goes here</h2>
                </div>
            </div>
        </div>
    )
}

export default Checkout
