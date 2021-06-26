import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
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
