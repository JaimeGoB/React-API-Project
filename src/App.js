import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => this.setState({
        users: response.data.results
      }))
  }

  render() {
    return (
      <div className="App" >
        {this.state.users.map(user =>
          <div>
            <h3>{user.cell}</h3>
            <p>{user.name.first} {user.name.last}</p>
            <hr />
          </div>)}
      </div>
    );
  }
}

export default App;
