import React from 'react';


export class Welcome_01 extends React.Component {
    state = {
        name: ' Jhon'
    };
    render() {
        return (
            <>
            <h1> Welcome</h1>
            <p> {this.state.name}</p>
            </>
        ) 
    };
}; 