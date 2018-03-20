import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    // console.log('value', value);

    this.setState(function() {
      return {
        username: value
      };
    });
  }

  render() {
    return (
      <div className="greeting-main">
        <h1>What is your name?</h1>
        <input id="username" type="text" value={this.state.username} autoComplete="off" onChange={this.handleChange} />
      </div>
    );
  }
}
export default Greeting;
