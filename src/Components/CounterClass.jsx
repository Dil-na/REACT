import { Component } from "react";
class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>Counter Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Click Me</button>
      </div>
    );
  }
}
export default CounterClass;