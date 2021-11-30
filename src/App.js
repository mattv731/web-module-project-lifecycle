import React from 'react';
import axios from 'axios';
import User from './components/User'
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    userInfo: []
}

  componentDidMount() {
    axios.get('https://api.github.com/users/mattv731')
  .then(resp => {
    this.setState({
      ...this.state,
      userInfo:resp.data
  })
  // console.log(resp.data)
})
  .catch(err => {
    console.log(err)
  })
}

  render() {
    return(<div>
      <header>
      <h1>GITHUB INFO</h1>
      <div className="navBar">
        <div>Github Handle</div>
        <div>Search</div>
        </div>
      </header>
      <div>
        <User userInfo={this.state.userInfo} />
      </div>
      <h3>
        Followers:
      </h3>
      <div>
        <FollowerList />
      </div>
    </div>);
  }
}

export default App;
