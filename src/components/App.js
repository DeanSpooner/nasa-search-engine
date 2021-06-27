import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import "../styles/App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="App">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
        className="nasa_image"
      ></img>
      <Search
        setSearchResults={setSearchResults}
        setHasSearched={setHasSearched}
      />
      <SearchResults results={searchResults} hasSearched={hasSearched} />
    </div>
  );
};

export default App;
