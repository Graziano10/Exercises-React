import {React} from 'react';

export class Welcome04 extends React.Component {
    state = {
        name: 'Jhon'
    };
    
    render() {
        return (
            <>
            <p>Welcome</p>
            <strong>{this.state.name}</strong>
            </>
        );
    };
};

export default Welcome04;