import React from "react";

class MovieDetail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/home");
        }
    }

    render() {
        return <div>MovieDetail</div>
    }
}

export default MovieDetail;