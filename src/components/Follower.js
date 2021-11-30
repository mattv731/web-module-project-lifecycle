import React from "react";

class Follower extends React.Component {
    render() {
        console.log(this.props)
        return(
            <img src={this.props.followers.avatar_url} />
        )
    }
}



export default Follower;