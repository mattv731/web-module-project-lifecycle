import axios from 'axios';
import React from 'react'

class User extends React.Component {
    
    render() {
        return(
            <div>
                <img src={this.props.userInfo.avatar_url} width='200px' />
                <h2><u>{this.props.userInfo.name}</u></h2>
                <p>{this.props.userInfo.bio}</p>
                <h4>Total Repos: {this.props.userInfo.public_repos}</h4>
                <h4>Total Followers: {this.props.userInfo.followers}</h4>
            </div>
        )
    }
}


export default User;