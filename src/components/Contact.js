import React, { Component } from 'react';
import Form from './Form';
import '../App.css';

export default class Contact extends Component{
  render() {
  return (
      <div className = "contact-container">
        <h1>
            Contact Us
        </h1>
        <h2>
            Please fill out the brief form 
            below with any questions, comments, or concerns. 
            We will get back to you as soon as we can!
        </h2>
        <div className = "form-container">
          <Form />
          <img src = {require('../images/bnb2.webp')} alt = "dogs" />
        </div>
      </div>
    );
  }
}