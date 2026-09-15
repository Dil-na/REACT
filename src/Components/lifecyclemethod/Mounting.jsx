import React from 'react';
class MountingCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("1.Constractor");
    }
    componentDidMount() {
        console.log("3.componentDidMount");
    }
    render() {
        console.log("2.render");
        return (
            <h1>Count: {this.state.count}</h1>
        );
    }
}

export default MountingCounter