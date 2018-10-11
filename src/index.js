import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAzA31IHCoOrvvzU8Yi5sFlnxiezSQvR98";
const App = () => {
  return (
    <div>
      <SearchBar />;
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
