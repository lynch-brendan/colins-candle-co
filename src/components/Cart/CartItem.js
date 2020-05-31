import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

export default function CartItem({item, value}){
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem, handleDetail} = value;
  return (
      <div className = "cart-column-row">
         <div 
         className = "cart-item-column"
         onClick = {() =>
         handleDetail(id)}>
           <Link to='/details'>
             <img src = {img} alt = "product" />
           </Link>
         </div>
         <div className = "cart-item-column">
           <h6>{title}</h6>
         </div>
         <div className = "cart-item-column">
           <h6>${price}</h6>
         </div>
         <div className = "cart-item-column">
           <div className = "cart-item-button">
            <div className = "decrement-button">
              <button 
              onClick = {() => decrement(id)}>
                -
              </button>
            </div>
            <div>
              <p className = "button-count">{count}</p>
            </div>
            <div className = "increment-button">
              <button 
              onClick = {() => increment(id)}>
                +
              </button>
            </div>
           </div>
          </div>
            <div 
            className = "cart-item-column"
            onClick = {() => removeItem(id)}>
               <img 
               src = {require('../../images/trashcan.png')}
               alt = 'trashcan' />
            </div>
            <div className = "cart-item-column">
               <h6>${total}</h6>
           </div>
           </div>         
    );
}