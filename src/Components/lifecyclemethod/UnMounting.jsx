import React from 'react'

class UnMountingCounter extends React.Component {
    componentWillUnmount() {
        console.log("component is removed");
    }
    render() {
        return<h1>Counter</h1>;
    }
}

export default UnMountingCounter