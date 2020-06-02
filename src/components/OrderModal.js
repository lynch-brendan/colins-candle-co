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
              <div className = "modal-body">
                  <div className = "top-modal-text">
                    <h1>Your Order is Successful!</h1>
                    <button
                      onClick = {() => closeOrderModal()}> 
                        x 
                    </button>
                  </div>
                  <h2>You should receive an order confirmation from PayPal within the next few
                      minutes. If there are any issues, please contact us at colinscandleco@gmail.com!
                  </h2>
                  <img id = "bnbng" src = {require('../images/bnbng.png')} alt = 'order success!' />
              </div>
          </div>
        );}
    }}
  </ProductConsumer>
);
}
}