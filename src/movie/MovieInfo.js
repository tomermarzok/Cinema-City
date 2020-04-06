import React from 'react';
import "./MovieInfo.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import StarRatingComponent from "react-star-rating-component";

const MovieInfo = (props) => {
    return (
      <div className="InfoContainer">
        <div className="row">
          <div className="col s12 m4">
            {props.currMovie.poster_path == null ? (
              <img
                alt="card"
                src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"
                style={{ width: "100%", height: 300 }}
              />
            ) : (
              <img
                alt="card"
                src={`http://image.tmdb.org/t/p/w185${props.currMovie.poster_path}`}
                style={{ width: "100%", height: 300 }}
              />
            )}

            <div
              className="row"
              onClick={props.closeMovieInfo}
              style={{ cursor: "pointer", paddingTop: 5 }}
            >
              <i className="fa fa-arrow-left fa-2x"> Go back</i>
            </div>
          </div>
          <div className="col s12 m8">
            <div className="info-container">
              <p>
                <font size="50">{props.currMovie.title}</font>
              </p>
              <p>
                {" Release: "}
                {props.currMovie.release_date
                  .substring(5)
                  .split("-")
                  .concat(props.currMovie.release_date.substring(0, 4))
                  .join("/")}
              </p>
              <p> {props.currMovie.overview}</p>
                <StarRatingComponent
                  name="rateMovie"
                  editing={false}
                  renderStarIcon={() => (
                    <span>
                      <i className="fa fa-star fa-3x"></i>
                    </span>
                  )}
                  starCount={5}
                  value={props.currMovie.vote_average / 2}
                />
              <div>Number of vote: {props.currMovie.vote_count}</div>
            </div>
          </div>
        </div>
      </div>
    );
}



export default MovieInfo; 