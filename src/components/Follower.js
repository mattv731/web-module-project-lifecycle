import React from "react";

class Follower extends React.Component {
    render() {
        const { info } = this.props;
        console.log(info)
        return(
            <div>
                <img src={this.props.info.avatar_url} width='100px' />
                <p>{this.props.info.login}</p>
            </div>
        )
    }
}

export default Follower;