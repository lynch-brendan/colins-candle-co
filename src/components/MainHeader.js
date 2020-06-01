import React, { Component, Fragment } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class MainHeader extends Component{

  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  render() {
    const{isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <Fragment>
        <h6 className = "welcome">
          <strong>{user ? `Welcome, ${user.name}` : null} </strong>
        </h6>
         <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <LoginModal /> 
      </Fragment>
    )

  return (
      <nav>
        <ul className = "main-nav">
          <li className = "dog-gif">
            <Link to='/about'>
              <img 
              alt = "Bert and Bailey GIF" 
              src = {require("../images/bnb.gif")}
              onClick = {() => console.log(process.env.REACT_APP_PAYPAL_API)}/>
            </Link>
          </li>
          <li className = "header-text">
            <h2>Colin's Candle Company</h2>
            <div className = "link-bar">
              <Link to="/about">
                <h1>
                  About
                </h1>
              </Link>
              <Link to="/">
                <h1>
                  Candles
                </h1>
              </Link>
              <Link to="/contact">
                <h1>
                  Contact
                </h1>
              </Link>
            </div>
          </li>
          <li className = "cart-button">
            <div className = "top-right">
              { isAuthenticated ? authLinks : guestLinks}
              <Link to= '/cart'>
                <button>
                <img alt = "Cart" src = {require("../images/cart.png")}/>
                <h3>Cart</h3>
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps,null)(MainHeader);