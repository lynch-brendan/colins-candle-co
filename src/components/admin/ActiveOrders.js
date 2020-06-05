import React, { Component } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import { fetchOrders, transferOrder } from '../../actions/orderActions';
import ItemRow from './ItemRow';
import { CSVLink } from "react-csv";

class ActiveOrders extends Component{
    constructor(props){
        super(props);
        this.copyToClipboard=this.copyToClipboard.bind(this);
        this.transferOrder = this.transferOrder.bind(this);
        this.copyAllToClipboard = this.copyAllToClipboard.bind(this);
    }

    copyToClipboard(order){
        navigator.clipboard.writeText(JSON.stringify(order))
    }

    copyAllToClipboard(){
      navigator.clipboard.writeText(JSON.stringify(this.props.orders))
    }

    transferOrder(order){
      this.props.transferOrder(order);
    }
    
    //Check for active orders continuously
    UNSAFE_componentWillMount() {
        this.props.fetchOrders();
    }


  render() {
      const orderComponent = this.props.orders.map(order => (
        <div className = "full-order" key = {order._id}>
            <div className = "order-row-container">
                <div id = "order-header">
                  <h3>Order</h3>
                  <div id = "button-row">
                    <button onClick = {() => this.copyToClipboard(order)}>Copy CSV</button>
                    <button><CSVLink data = {JSON.stringify(order)}>Download CSV</CSVLink></button>
                    <button onClick = {() => this.transferOrder(order)}>Complete Order</button>
                  </div>
                </div>
                <h4 className = "order-item-title">Address</h4>
            <div className = "order-row">
                  <h5>Name</h5>
                  <h5>Address</h5>
                  <h5>City</h5>
                  <h5>State</h5>
                  <h5>ZipCode</h5>
              </div>
                <div className = "order-row">
                <p>{order.address.recipient_name}</p>
                <p>{order.address.line1}</p>
                <p>{order.address.city}</p>
                <p>{order.address.state}</p>
                <p>{order.address.postal_code}</p>
            </div>
            <h4 className = "order-item-title">Items</h4>
            <div className = "order-row">
                  <h5>Count</h5>
                  <h5>Title</h5>
                  <h5>Color</h5>
                  <h5>Price</h5>
                  <h5>Total</h5>
              </div>
                <ItemRow items = {order.items} />
            </div>
        </div>
      ));

  return (
      <div className = "admin-container">
          <div className = "admin-nav">
            <h1 id = "admin-navigation-bar">Active Orders</h1> 
            <div className = "admin-buttons">
                <button className = "admin-button">
                    <Link to="/active">Active Orders</Link>
                </button>
                <button className = "admin-button">
                    <Link to="/completed">Completed Orders</Link>
                </button>
                <button className = "admin-button">
                    <Link to="/inventory">Inventory</Link>
                </button>
            </div>
          </div>
          <div className = "active-order-body">
            <div className = "top-order-buttons">
              <button onClick = {() => this.copyAllToClipboard()}>Copy All Orders</button>
              <button><CSVLink data = {JSON.stringify(this.props.orders)}>Download All As CSV</CSVLink></button>
            </div>
                {orderComponent}
          </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
    orders: state.orders.orders
})

export default connect(mapStateToProps, {fetchOrders, transferOrder})(ActiveOrders);