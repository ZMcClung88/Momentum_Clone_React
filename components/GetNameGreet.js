import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hideGreeting: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    let username = event.target.value;
    console.log('username', username);

    this.setState(function() {
      return {
        username: username
      };
    });
  }
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log('do validate');
      this.setState({
        hideGreeting: false
      });
    }
  }

  render() {
    return (
      <div className="greeting-main">
        <div id="getName">
          <h1>What is your name?</h1>
          <input
            id="username"
            type="text"
            value={this.state.username}
            autoComplete="off"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        {this.state.hideGreeting ? null : <Aloha username={this.state.username} />}
      </div>
    );
  }
}

class Aloha extends React.Component {
  render() {
    return (
      <h1>
        Welcome, {this.props.username}!
      </h1>
    );
  }
}

export default Greeting;
