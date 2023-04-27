import React from 'react';


export class Welcome_03 extends React.Component {
    state = {
        age: 25
    };
    render() {
        return (
            <>
            <p>Welcome</p>
            <p>You age is {this.state.age}</p>
            </>
        );
    };
};