import React, { Component } from 'react'

class UpdatingCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button 
                onClick={() => 
                    this.setState({ 
                        count: this.state.count + 1 
                    })
                }
                >
                    Increment
                </button>
            </div>
        );
    }
}

export default UpdatingCounter