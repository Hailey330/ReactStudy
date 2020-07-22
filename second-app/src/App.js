import React, { Component } from 'react';

class App extends Component {
  state = {
    password: '',
    clicked: false,
    validate: false,
  };

  chageFocus = () => {
    this.input.focus();
    this.mydiv.style.backgroundColor = 'yellow';
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="text"
          placeholder="Username"
        />
        <input type="text" placeholder="Password" />
        <div
          ref={(ref) => {
            this.mydiv = ref;
          }}
        >
          abc
        </div>
        <button onClick={this.chageFocus}>포커스 이동</button>
      </div>
    );
  }
}

export default App;
