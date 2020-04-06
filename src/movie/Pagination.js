import React from "react";

const Pagination = (props) => {
    const pageLink = []
    for (let i=1 ; i<= props.pages + 1 ; i++){
        let active = props.currentPage === i ? 'active' : '' 
        pageLink.push(
          <li
            className={`waves-effect ${active}`}
            key={i}
            onClick={() => props.nextPage(i)} >
            <a href="!#">{i}</a>
          </li>
        )
    }
    return (
      <div className="container">
        <div className="row">
          <ul className="pagination">
            {props.currentPage > 1 ? 
            (<li
                className={`waves-effect`}
                onClick={() => props.nextPage(props.currentPage - 1)}>
                <a href="!#">prev</a>
              </li>) : ("")}
            {pageLink}
            {props.currentPage < props.pages + 1 ? 
            ( <li
                className={`waves-effect`}
                onClick={() => props.nextPage(props.currentPage + 1)}>
                <a href="!#">next</a>
              </li>) : ("")}
          </ul>
        </div>
      </div>
    );
}

export default Pagination;