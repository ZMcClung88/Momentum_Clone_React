import React from 'react';

class GetName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;
    console.log('username value', value);

    this.setState(function() {
      return {
        username: value
      };
    });
  }

  render() {
    return (
      <form>
        <h1>What is your name?</h1>
        <input id="username" type="text" value={this.state.username} autoComplete="off" onChange={this.handleChange} />
      </form>
    );
  }
}

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }

  handleSubmit(username) {
    console.log(username);
  }
  render() {
    return (
      <div>
        <GetName onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Greeting;
