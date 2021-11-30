import React from "react";

class Follower extends React.Component {
    render() {
        const { info } = this.props;
        return(
            <div>
                <img src={info.avatar_url} width='100px' />
                <p>{info.login}</p>
            </div>
        )
    }
}

export default Follower;