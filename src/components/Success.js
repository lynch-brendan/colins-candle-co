import React, { Component } from 'react';
import '../App.css';

export default class Success extends Component{
  render() {
  return (
      <div className = "success-container">
          <h1>Form has been submitted succesfully!</h1>
          <h2>We will try to get back to you as soon as possible.
            Please feel free to keep exploring the website in the
              meantime. Thank you so much!</h2>
          <a href = '/'>Return to Our Products</a>
      </div>
    );
  }
}