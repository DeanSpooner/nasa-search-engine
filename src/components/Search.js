import React, { useState } from "react";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";
import "../styles/Search.css";

const Search = ({ setSearchResults, setHasSearched }) => {
  const [value, setValue] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
    setHasSearched(true);
  };

  return (
    <>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          data-testid="search__input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="search__button"
          data-testid="search__button"
          type="submit"
        >
          Go!
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setHasSearched: PropTypes.func.isRequired,
};

export default Search;
