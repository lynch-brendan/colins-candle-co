import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import '../App.css'

export default class Modal extends Component{
  render() {
  return (
      <ProductConsumer>
        {(value =>{
          const {modalOpen, closeModal, increment, decrement} = value;
          const prod = value.modalProduct;

          if(!modalOpen) {
            return null;
          } else {
            return(
            <div className = "modalContainer">
              <div className = "modal-body">
                <div className = "modal-top">
                    <h5>Item added to the cart.</h5>
                    <button
                    className = "modal-x"
                    onClick = {() => closeModal()}>
                      x
                    </button>
                </div>
                <img src = {prod.img} alt = "prod" />
                <h5>{prod.title}</h5>
                <h6 id = "modal-price"><strong>Price: ${prod.price}</strong></h6>
                <div className = "modal-inc-button">
                   <div className = "decrement-button">
                     <button
                     onClick = {() => decrement(prod.id)}>
                       -
                     </button>
                   </div>
                   <div>
                     <p className = "button-count">{prod.count}</p>
                   </div>
                   <div className = "increment-button">
                     <button
                     onClick = {() => increment(prod.id)}>
                       +
                     </button>
                   </div>
                </div>
                <Link to="/">
                  <button id = "continue-shopping-btn"
                  onClick = {() => closeModal()}>
                    Continue Shopping
                  </button>
                </Link>
                <Link to="/cart">
                  <button className = "cart-btn"
                  onClick = {() => closeModal()}>
                    Go to Cart
                  </button>
                </Link>
              </div>
            </div>
          );
          }
        })}
      </ProductConsumer>
    );
  }
}