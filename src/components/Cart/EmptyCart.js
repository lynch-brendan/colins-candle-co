import React from 'react';
import '../../App.css';

export default function EmptyCart(){
  return (
      <div className = "empty-cart-container">
          <div className = "empty-row">
              <h1>Your cart is currently empty.</h1>
          </div>
      </div>
    );
}