/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../App.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="calculation-field">
          <input type="number" />
          <h1 className="answer">0</h1>
          <div className="numbers-and-symbols">
            <div className="AC size">AC</div>
            <div className="plus-or-minus size">+/-</div>
            <div className="percentage size">%</div>
            <div className="division size orabg-bg">/</div>
            <div className="seven size">7</div>
            <div className="eight size">8</div>
            <div className="nine size">9</div>
            <div className="cross size orabg-bg">x</div>
            <div className="four size">4</div>
            <div className="five size">5</div>
            <div className="six size">6</div>
            <div className="minus size orabg-bg">-</div>
            <div className="one size">1</div>
            <div className="two size">2</div>
            <div className="three size">3</div>
            <div className="plus size orabg-bg">+</div>
            <div className="zero">0</div>
            <div className="dot size">.</div>
            <div className="equal size orabg-bg">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
