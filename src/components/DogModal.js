import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import '../App.css';

export default class DogModal extends Component{
  render() {
  return (
      <ProductConsumer>
          {(value) => {
            if(!value.dogModalOpen){
                return null;
            } else {
                return(
                    <div className = "modalContainer">
                        <div className = "modal-body">
                            <div className = "dog-modal-text">
                                <div className = "dog-modal-top-row">
                                    <h1>
                                        Thank You!
                                    </h1>
                                    <button onClick = {() => value.closeDogModal()}>x</button>
                                </div>
                                <p>We'll get it to them ASAP :)</p>
                            </div>
                            <img className = "dog-modal-img" src = {require("../images/thanks.gif")} alt = "thanks!">
                            </img>
                        </div>
                    </div>
                );
            }
          }}
      </ProductConsumer>
      
    );
  }
}