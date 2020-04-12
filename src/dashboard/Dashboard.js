import React, { Component} from "react";
import '../auth/App.css';
import "materialize-css/dist/css/materialize.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import SearchPage from '../movie/SearchPage.js';
import MovieRow from '../movie/MovieRow.js';
import Pagination from '../movie/Pagination.js';
import MovieInfo from '../movie/MovieInfo.js';
import {connect} from 'react-redux';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      currSearch: "Search movie",
      totalResults: -1,
      currentPage: 1,
      currMovie: null
    };
    this.apiKey = "*******";
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
          currSearch: this.state.searchTerm,
        });
      });
  };

  getCurrSearch = () => {
    return this.state.currSearch;
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  };

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter((movie) => movie.id === id);
    const newCurrMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({ currMovie: newCurrMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currMovie: null });
  };


  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        {this.state.currMovie == null ? (
          <div>
            <SearchPage
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              getCurrSearch={this.getCurrSearch()}
            />
            {this.state.totalResults === 0 ? (
              <div className="EmptySearchContainer">
                <div className="row">
                  <div className="sorryDiv">Sorry,</div>
                  <div>We couldn't find any results matching</div>
                  <div>{'"' + this.state.currSearch + '"'}</div>
                </div>
              </div>
            ) : (
              <MovieRow
                viewMovieInfo={this.viewMovieInfo}
                movies={this.state.movies}
              />
            )}
          </div>
        ) : (
          <MovieInfo
            currMovie={this.state.currMovie}
            closeMovieInfo={this.closeMovieInfo}
          />
        )}
        {this.state.totalResults > 20 && this.state.currMovie == null ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps=(state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Dashboard);
