import React, { Component } from 'react';
import '../App.css';

class Default extends Component{
  render() {
  return (
      <div className = "default">
          <h1>
            Error 404
          </h1>
          <h3>
            Aw, sorry! The requested URL can't be found :(
          </h3>
      </div>
    );
  }
}

export default Default;