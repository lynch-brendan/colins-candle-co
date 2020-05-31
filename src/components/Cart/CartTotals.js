import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';
import '../../App.css';

export default function CartTotals({value, history}){
    const {cartSubtotal, cartTax, cartTotal, clearCart, addOrder, openOrderModal} = value;
  return (
    <React.Fragment>
        <div className = "totals-container">
            <div className = "totals-row">
                <Link to='/'>
                    <button 
                    className = "clear-cart-button"
                    onClick = {() => clearCart()}>
                        Clear Cart
                    </button>
                </Link>
                <h5>
                    <span className = "text-title">
                        Subtotal: ${cartSubtotal}
                    </span>
                </h5>
                <h5>
                    <span className = "text-title">
                        Tax: ${cartTax}
                    </span>
                </h5>
                <h5>
                    <span className = "text-title">
                        Total: ${cartTotal}
                    </span>
                </h5>
                <PayPalButton 
                  total = {cartTotal} 
                  clearCart = {clearCart} 
                  history = {history}
                  addOrder = {addOrder}
                  openOrderModal = {openOrderModal} />
            </div>
        </div>
    </React.Fragment>
    );
}