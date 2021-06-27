import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results, hasSearched }) => {
  if (results.length === 0 && hasSearched === false) {
    return null;
  }
  if (results.length === 0 && hasSearched === true) {
    return (
      <p className="rejectedSearch">
        Sorry, no results exist for this search! Try again with another search
        term.
      </p>
    );
  } else {
    return (
      <div className="searchResults">
        {results.map((image) => (
          <div className="images" key={image}>
            <img
              className="card-image"
              src={image}
              alt="spaceImage"
              data-testid="image"
            />
          </div>
        ))}
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
