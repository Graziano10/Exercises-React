import React from 'react';


export class Welcome_02 extends React.Component {
    render() {
        return <h1> Welcome{this.props.name}</h1>
    };
};

Welcome.defaultProps = {
    name: ' Jhon'
};