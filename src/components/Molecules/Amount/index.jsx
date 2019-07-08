import React, { Component } from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

class Amount extends Component {
  state = {
    amount: 0,
  };

  onlyNumber = (value) => /^\d*\.?\d*$/.test(value)

  add = () => {
    this.setState({
      amount: this.state.amount += 1,
    });
  }

  remove = () => {
    if (this.state.amount > 0) {
      this.setState({
        amount: this.state.amount -= 1,
      });
    }
  }

  insert = (event) => {
    const value = event.target.value;

    if (this.onlyNumber(value)) {
      this.setState({
        amount: parseInt(value),
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.remove}>-</button>
        <input onChange={this.insert} type="text" value={this.state.amount} />
        <button onClick={this.add}>+</button>
      </div>
    );
  }
};

export default Amount;
