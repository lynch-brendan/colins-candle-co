import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import '../App.css';

export default class Details extends Component{
  render() {
  return (
      <ProductConsumer>
        {value => {
          const details = value.detailProduct;
          return(
            <div className = "detail-container">
              <div className = "detail-body">
                <div className = "detail-title">
                  <h1> {details.title} </h1>
                </div>
                <div className = "detail-image-row">
                  <img alt = "details" src = {details.img}/>
                  <div className = "description">
                    <p>{details.info}</p>
                    <p>Price: ${details.price}</p>
                    <div className = "detail-buttons">
                      <Link to="/">
                        <button className = "cart-btn">
                          Back to Products
                        </button>
                      </Link>
                      <button 
                        className = "cart-btn" 
                        id = 'detail-button'
                        disabled = {details.inCart ? true : false}
                        onClick = {() => {
                          value.addToCart(details.id);
                          value.openModal(details.id);}} >
                        {details.inCart ? (
                        <p disabled>
                        {" "} 
                          In Cart 
                        </p>) : <p>Add to Cart</p>}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}