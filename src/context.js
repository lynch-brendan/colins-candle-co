import React, { Component } from 'react';
import axios from 'axios';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component{
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    old_cart: [],
    dogModalOpen: false,
    orderModalOpen: false,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    taxRate: .1
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return {products: tempProducts};
    });
  }

  handleDetail = (id) =>{
    const product = this.getItem(id);
    this.setState(() => {return {detailProduct:product}})
  }

  addToCart = (id) =>{
    let tempProducts = [...this.state.products];
    var idx;
    var i;
    for(i = 0; i < this.state.products.length; ++i){
      if(this.state.products[i].id === id){
        idx = i;
      }
    }
    const product = tempProducts[idx];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {products: tempProducts, cart: [...this.state.cart, product]};
    }, 
    () => {this.addTotals();}
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct: product, modalOpen: true}
    })
  }

  closeModal = () => {
    this.setState(() =>
    {return {modalOpen: false}})
  }

  openDogModal = () => {
    this.setState(() =>
    {return {dogModalOpen: true}}
    )
  }

  closeDogModal = () => {
    this.setState(() => {
      return {dogModalOpen: false}
    })
  }

  getItem = (id) => {
    var i;
    for (i = 0; i < this.state.products.length; ++i) {
      if(this.state.products[i].id === id){
        return this.state.products[i];
      }
    }
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    var selectedProduct = null;
    var i;
    for(i = 0; i < tempCart.length; ++i){
      if (tempCart[i].id === id){
        selectedProduct = tempCart[i];
      }
    }
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {cart: [...tempCart]}
    }, () =>
    this.addTotals()
    );
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    var selectedProduct = null;
    var i;
    for(i = 0; i < tempCart.length; ++i){
      if (tempCart[i].id === id){
        selectedProduct = tempCart[i];
      }
    }
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if(product.count === 0){
      this.removeItem(id)
    } else {
      product.total = product.count * product.price;  
      this.setState(() => {
      return {cart: [...tempCart]};
    }, () => {
      this.addTotals()
    }
    );
  }
};

  addOrder = (payment) => {
    //Get our order in the format we need to post it.
    const {address} = payment;
    const items = this.state.cart;
    const output = {
      address,
      items
    }

    //Send it to our database
    try{
      axios
      .post('api/orders', output)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
     });
    } 
    catch (e) {
      throw e;
    }
  } 

  openOrderModal = (payment) => {
    this.setState(() =>
    {return {orderModalOpen: true}}
    )
  }

  closeOrderModal = () => {
    this.setState(() => {
      return {orderModalOpen: false}
    })
  }

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => 
      item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      }
    }, 
    () => {
      this.addTotals();
    });
  }

  clearCart = () => {
    this.setState(() =>{
      return {cart: []};
    }, () => {
      this.setProducts();
      this.addTotals();
    });
  }

  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map(item =>
      (subtotal += item.total));
    const tempTax = subtotal * this.state.taxRate;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState(() => {
    return{
      cartSubtotal: subtotal,
      cartTax: tax,
      cartTotal: total
    }})
  }

  logIn = () => {
    console.log("Log in");
  }

  render() {
  return (
      <ProductContext.Provider value = {{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
        openDogModal: this.openDogModal,
        closeDogModal: this.closeDogModal,
        addOrder: this.addOrder,
        openOrderModal: this.openOrderModal,
        closeOrderModal: this.closeOrderModal,
        logIn: this.logIn
      }}>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};