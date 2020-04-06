import React from 'react';
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const Movie = (props) => {
    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            {props.image == null ? (
              <img
                alt="card"
                src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"
                style={{ width: "100%", height: 300 }}
              />
            ) : (
              <img
                alt="card"
                src={`http://image.tmdb.org/t/p/w185${props.image}`}
                style={{ width: "100%", height: 300 }}
              />
            )}
          </div>
          <span className="card-title">
            {props.title.length < 20 ? (
              <div>{props.title}</div>
            ) : (
              <div>{props.title.substr(0, 20)}</div>
            )}
          </span>
          <div className="card-content">
            <p>
              <i
                className="fa fa-info-circle fa-2x"
                onClick={() => props.viewMovieInfo(props.movieId)}
                style={{ cursor: "pointer", paddingTop: 5 }}
              >
                <font size="5">details</font>
              </i>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Movie;