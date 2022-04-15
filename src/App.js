import "./App.css";
import React from "react";
import { useEffect } from "react";

import { RedditListContainer } from "./containers/RedditListContainer/RedditListContainer";
import { useDispatch, useSelector } from "react-redux";

import { startLoadingRecords } from "./actions/records";

export const App = () => {
  const dispatch = useDispatch();
  const { after, loading, records } = useSelector((state) => state.records);

  useEffect(() => {
    console.log("App render");
  }, []);

  useEffect(() => {
    dispatch(startLoadingRecords(after));
  }, [dispatch]);

  return (
    <div className="App">
      {!loading && records && <RedditListContainer items={records} />}

      {loading && (
        <div className="loading">
          <h4>Loading...</h4>
        </div>
      )}
    </div>
  );
};
