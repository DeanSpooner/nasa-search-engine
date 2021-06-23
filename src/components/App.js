import React from "react";
import Search from "./Search";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
        className="nasa_image"
      ></img>
      <Search />
    </div>
  );
}

export default App;
