import axios from "axios";
import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    state = {
        followers: []
    }
    componentDidMount(){
        axios.get('https://api.github.com/users/mattv731/followers')
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
    render() {
        // console.log(this.state.followers)
        return(
            <div>
                {this.state.followers.forEach(item => (
                <Follower followers={item} />))}
            </div>
        )
    }
}




export default FollowerList;