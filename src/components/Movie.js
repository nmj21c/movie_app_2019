import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie ({id, year, title, summary, poster}) {
    return (
        <Link to={{
            pathname: "/moviedetail",
            state: {
                id
            }
        }}>
        <h4>{title}</h4>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;