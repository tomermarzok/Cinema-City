import React from "react";
import "../movie/MovieInfo.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const About = (props) => {
  return (
    <div className="InfoContainer">
      <div className="row">
        <i className="fa fa-info fa-5x"></i>
        <div className="TitleMovie">Cinema-City Tomer marzok</div>
        <div className="InfoText">
          <div>
            is a comprehensive and in-depth resource for finding out more about
            the movies you love.
          </div>
          <p></p>
          <div>On our web you'll find:</div>
          <div>
            <i className="fa fa-play"></i>
            Details of upcoming films
          </div>
          <div>
            <i className="fa fa-play"></i>
            Information about your favorite movies, actors and filmmakers
          </div>
          <div>
            <i className="fa fa-play"></i>
            Coming soon - A search for genres and actors
          </div>
          <p></p>
          <div>
            <i className="fa fa-user fa-2x">Our users-</i>
          </div>
          <div> Get all updates by email</div>
          <p></p>
          <p className="TitleMovie">App developer - Tomer Marzok </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
