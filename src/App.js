import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      on: false,
    }
  }

  //this is where we are going to put our methods
  increment = () => {
    if(this.state.count < 20){
      this.setState ({
        count: this.state.count + 1,
      })
    }
  }
  doubleIncrement = () => {
    if(this.state.count < 19){
      this.setState ({
        count: this.state.count + 2,
      })
    }
  }
  decrement = () => {
    if(this.state.count > 0){
      this.setState ({
        count: this.state.count - 1,
      })
    }
  }
  doubleDecrement = () => {
    if(this.state.count > 1){
      this.setState ({
        count: this.state.count - 2,
      })
    }
  }
  reset = () => {
    this.setState ({
      count: this.state.count = 0,
    })
  }
  toggle = () => {
    this.setState ({
      on: !this.state.on,
    })
  }
  render(){
    if (this.state.on){
      return(
        <div className="container">
          <div className="navbar">Counter</div>
          <div className="counter">
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.reset}>Clear</button>
            <button type="button" onClick={this.doubleIncrement}>Increment</button>
            <button type="button" onClick={this.doubleDecrement}>Decrement</button>
            <button type="button" onClick={this.toggle}>Double Increment</button>
          </div>
        </div>
      );
    } else {
      return(
        <div className="container">
          <div className="navbar">Counter</div>
          <div className="counter">
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.reset}>Clear</button>
            <button type="button" onClick={this.increment}>Increment</button>
            <button type="button" onClick={this.decrement}>Decrement</button>
            <button type="button" onClick={this.toggle}>Single Increment</button>
          </div>
        </div>
      );
    }
  }
}
export default Counter;
