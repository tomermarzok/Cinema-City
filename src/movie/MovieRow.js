import React  from 'react';
import Movie from './Movie.js';
import './MovieRow.css';

const MovieRow = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {props.movies.map((movie, i) => {
            return (
              <Movie
                key={i}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                MovieRate={movie.vote_average}
                MovieTotalVote={movie.vote_count}
                image={movie.poster_path}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;