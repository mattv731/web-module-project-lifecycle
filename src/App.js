import React from 'react';
import axios from 'axios';
import User from './components/User'
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    myInfo: [],
    searched: 'mattv731',
    followers: []
}

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.searched}`)
  .then(resp => {
    this.setState({
      ...this.state,
      myInfo:resp.data
  })
  // console.log(resp.data)
})
  .catch(err => {
    console.log(err)
  })
}

componentDidUpdate(){
  axios.get(`https://api.github.com/users/${this.state.searched}/followers`)
  .then((resp) => {
      this.setState({
          ...this.state,
          followers: resp.data
      })
  })
  .catch((err) => {
      console.log(err)
  })
}

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searched: e.target.value
    })
  }

  render() {
    return(<div>
      <header>
      <h1>GITHUB INFO</h1>
      <div className="navBar">
        <div>Github Handle</div>
        <form>
          <input placeholder="search" onChange={this.handleChange}/>
          <button>Search</button>
        </form>
        </div>
      </header>
      <div>
        <User userInfo={this.state.searched} />
      </div>
      <h3>
        Followers:
      </h3>
      <div>
        <FollowerList followers={this.state.followers}/>
      </div>
    </div>);
  }
}

export default App;
