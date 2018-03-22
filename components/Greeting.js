import React from 'react';

class Aloha extends React.Component {
  render() {
    return <h1>Welcome, Zac</h1>;
  }
}

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log('do validate');
    }
  }

  render() {
    return (
      <div className="greeting-main">
        <h1>What is your name?</h1>
        <input
          id="username"
          type="text"
          value={this.state.username}
          autoComplete="off"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <Aloha />
      </div>
    );
  }
}
export default Greeting;
