import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export default class Footer extends Component{
  render() {
  return (
      <footer className = "footer">
          <h4>
              A Family Quarantine Business -  
              <Link to='/about'> About Us -</Link>
              <Link to='/contact'> Contact Us</Link>
          </h4>
          <h5>
            &copy; 2020 Colin's Candle Company
          </h5>
      </footer>
    );
  }
}