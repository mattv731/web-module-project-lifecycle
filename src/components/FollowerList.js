import axios from "axios";
import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    
    render() {
        return(
            <div>
                {this.props.followers.map(item => <Follower info={item} key={item.id} /> )}
            </div>
        )
    }
}




export default FollowerList;