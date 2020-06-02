import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context';
import PropTypes from "prop-types";

export default class Product extends Component{
  render() {
    const {id, title, img, inCart} = this.props.product;
  return (
      <div className = "product-wrapper">
        <ProductConsumer>
          {(value) => (  
            <React.Fragment>
              <div className = "card" 
              onClick = {() => 
              value.handleDetail(id)}>
            <Link to="/details">
              <img src = {img} alt = "product" className = "card-img-top" />
            </Link>
          </div>
          <div className = "product-footer">
              <p className = "product-footer-text">{title}</p>
            <button className = "cart-btn" disabled = {inCart ? true : false}
            onClick = {() =>{
              value.addToCart(id);
              value.openModal(id);
              }} >
              {inCart ? (
              <p disabled>
                {" "} 
                In Cart 
                </p>) : 
                (<div className = "product-button">
                  <img className = "btn-image" alt = "cart" src = {require("../images/cart-image.png")} />
                  <p className = "btn-text">Add to Cart</p>
                </div>)}
            </button>
            </div>
            </React.Fragment>)}
      </ProductConsumer>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}