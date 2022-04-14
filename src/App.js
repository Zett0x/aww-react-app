import { fetchRedditData } from "./api/fetchRedditData";
import "./App.css";

import { useState, useEffect } from "react";

import { RedditListContainer } from "./containers/RedditListContainer/RedditListContainer";
import { IMG_LOADING } from "./constants/constants";

export const App = () => {
  const [records, setRecords] = useState([]);
  const [afterParam, setAfterParam] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("App render");
    console.log("App records:", records);
  }, []);

  useEffect(() => {
    fetchRedditData(afterParam, setRecords, setAfterParam, setLoading, records);
  }, [pageNum]);

  return (
    <div className="App">
      {!loading && records && (
        <RedditListContainer
          items={records}
          setPageNum={setPageNum}
          loading={loading}
          setLoading={setLoading}
        />
      )}

      {loading && (
        <div className="loading">
          <img src={IMG_LOADING} alt="loading" />
        </div>
      )}
    </div>
  );
};
