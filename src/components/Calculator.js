/* eslint-disable operator-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
      err: null,
    };
    this.clickHandler = (e) => {
      this.setState((prevState) => calculate(prevState, e.target.name));
    };
  }

  render() {
    return (
      <div className="main-container">
        <div className="calculation-field">
          <h1 className="answer">
            {this.state.next ||
              this.state.operation ||
              this.state.total ||
              this.state.err ||
              0}
          </h1>
          <div className="numbers-and-symbols">
            <button
              type="button"
              onClick={this.clickHandler}
              className="AC size"
              name="AC"
            >
              AC
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="plus-or-minus size"
              name="+/-"
            >
              +/-
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="percentage size"
              name="%"
            >
              %
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="division size orabg-bg"
              name="÷"
            >
              ÷
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="seven size"
              name="7"
            >
              7
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="eight size"
              name="8"
            >
              8
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="nine size"
              name="9"
            >
              9
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="cross size orabg-bg"
              name="x"
            >
              x
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="four size"
              name="4"
            >
              4
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="five size"
              name="5"
            >
              5
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="six size"
              name="6"
            >
              6
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="minus size orabg-bg"
              name="-"
            >
              -
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="one size"
              name="1"
            >
              1
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="two size"
              name="2"
            >
              2
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="three size"
              name="3"
            >
              3
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="plus size orabg-bg"
              name="+"
            >
              +
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="zero"
              name="0"
            >
              0
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="dot size"
              name="."
            >
              .
            </button>
            <button
              type="button"
              onClick={this.clickHandler}
              className="equal size orabg-bg"
              name="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
