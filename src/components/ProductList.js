import React, { Component } from 'react';
import '../App.css';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

class ProductList extends Component{
  render() {
  return (
    <React.Fragment>
      <div className = "container">
        <div className = "row">
          <Title name = "Our " title = "Products" />
        </div>
        <div className = "product-listing">
        <ProductConsumer>
          {(value) => {
            return value.products.map(product => {
              return <Product key = {product.id} product = {product}/>
            });
          }}
        </ProductConsumer>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default ProductList;