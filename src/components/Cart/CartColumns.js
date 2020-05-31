import React from 'react';
import '../../App.css';

export default function CartColumns(){
  return (
      <div className = "cart-column-container">
          <div className = "cart-column-row">
              <div className = "cart-item-column">
                <p>
                    Products
                </p>
              </div>
              <div className = "cart-item-column">
                <p>
                    Name of Product
                </p>
              </div>
              <div className = "cart-item-column">
                <p>
                    Price
                </p>
              </div>
              <div className = "cart-item-column">
                <p>
                    Quantity
                </p>
              </div>
              <div className = "cart-item-column">
                <p>
                    Remove
                </p>
              </div>
              <div className = "cart-item-column">
                <p>
                    Total
                </p>
              </div>
          </div> 
        </div>
    );
}