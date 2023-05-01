import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    this.intervalId = setInterval(this.handleIncrement, this.props.incrementInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <h1>Counter: {this.state.count}</h1>;
  }
}

export default Counter;



// Non è obbligatorio avere il costruttore.
// Oggi grazie all introduzione degli hoock (più in specifico 'useState', 'useEffect'),
// non c'è più bisogno del cotruttore per getire lo stato e i cicli del componente.