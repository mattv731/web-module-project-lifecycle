import React from 'react';
import axios from 'axios'

class App extends React.Component {

  componentDidMount() {
    axios.get('https://api.github.com/users/mattv731')
  .then(resp => {
    console.log(resp.data)
  })
  .catch(err => {
    console.log(err)
  })
}
  render() {
    return(<div>
      Github Card
    </div>);
  }
}

export default App;
