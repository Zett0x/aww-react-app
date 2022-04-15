import "./App.css";
import React from "react";

import { RedditListContainer } from "./containers/RedditListContainer/RedditListContainer";

export const App = () => {
  return (
    <div className="App">
      <RedditListContainer />
    </div>
  );
};
