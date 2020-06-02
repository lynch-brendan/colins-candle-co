import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import '../App.css';

export default class About extends Component{
  render() {
  return (
      <div className = "about-container">
        <h1 className = "about-header">About Us</h1>
        <div className = "about-top">
          <div className = "about-top-text">
              <h3 id = "our-mission">
                Our Mission:
              </h3>
              <h2>
                In the dark times of quarantine, Colin's Candle Company tries to bring the world a little bit of light. 
              </h2>
          </div>
          <img src = {require('../images/colin-teddy.jpeg')} alt = "colin"/>
        </div>
        <div className = 'about-bottom-container'>
          <div className = "about-bottom-column">
              <h2 className = "about-bottom-header">
                How Did We Start?
              </h2>
              <p>
                  During a two week self-quarantine, our founder, Colin Lynch, wanted to try something
                  new to spice up his routine. Inspired by the candles he saw during his travels in
                  Southern France, he bought natural candle making equipment alongside fragrance oils
                  inspired by French designers. When he finally rejoined his family's quarantine, his younger brothers
                  Brendan and Sean were really impressed by his candles. So, Colin, Sean, and Brendan decided
                  to start &copy; Colin's Candle Company and share Colin's Candles with the world.

              </p>
          </div>
          <div className = "about-bottom-column">
              <h2 className = "about-bottom-header"> 
                How Are Our Candles Made?
              </h2>
              <p>
                  Our candles are all hand-poured in the Lynch kitchen. We believe in making clean-burning candles,
                  so our only ingredients are natural 100% soy wax, fragrance oils, hemp wicks, and dye (for 
                  certain candles).
                  We hand-label each of our candles after deciding which name best fits that particular
                  candle-burning experience.
              </p>
          </div>
          <div className = "about-bottom-column">
              <h2 className = "about-bottom-header">
                Why All the Dog GIFs?
              </h2>
              <p>
                  Our dogs, Bert and Bailey, are the sweetest yorkie beagles you'll ever meet. 
                  When we first started making candles, they were always around to smell-test our
                  scents and make sure they were up to par. Since then, they have become our mascots
                  and our motivation. If you like them as much as we do, click the button below and we'll give
                  them a treat for you!
              </p>
              <ProductConsumer>
                {(value) =>  
                  <button onClick = {() => 
                    value.openDogModal()}>
                    Give Bert and Bailey a Treat!
                </button>}
              </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}