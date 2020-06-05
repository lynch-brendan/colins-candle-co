import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

export default class Admin extends Component{
  render() {
  return (
      <div id = "admin-page-container" className = "admin-container">
          <h1 id = "admin-navigation-bar">Admin Navigation Bar</h1> 
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
    );
  }
}