import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import '../App.css';

export default class OrderModal extends Component{
  render() {
  return (
    <ProductConsumer>
    {(value) => {
        const {orderModalOpen, closeOrderModal} = value;
        if(!orderModalOpen){
            return null;
        } else {
        return(
          <div className = "modalContainer">
              <div className = "modalFoo">
                  <div className = "top-modal-text">
                    <h1>Your Order is Confirmed!</h1>
                    <button
                      onClick = {() => closeOrderModal()}> 
                        x 
                    </button>
                  </div>
                  <h2>You should receive an order confirmation from PayPal within the next few
                      minutes. If there are any issues, please contact us at colinscandleco@gmail.com!
                  </h2>
              </div>
          </div>
        );}
    }}
  </ProductConsumer>
);
}
}