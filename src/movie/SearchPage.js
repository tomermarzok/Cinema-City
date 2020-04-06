import React from 'react';
import "./SearchPage.css";

const SearchPage = (props) => {
    return (
      <div className="container">
        <div className="row">
          <section className="col s4 offset-s4">
            <form
              action=""
              onSubmit={props.handleSubmit}
              placeholder="search movie"
            >
              <div className="input-field">
                <input
                  className="search-bar"
                  placeholder={props.getCurrSearch}
                  type="text"
                  onChange={props.handleChange}
                  required
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    );
}

export default SearchPage;