import { fetchRedditData } from "./api/fetchRedditData";
import "./App.css";

import { useState, useEffect } from "react";
import { RedditListContainer } from "./containers/RedditListContainer/RedditListContainer";

export const App = () => {
  const [records, setRecords] = useState([]);
  const [afterParam, setAfterParam] = useState(null);
  const [beforeParam, setBeforeParam] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRedditData(
      afterParam,
      setRecords,
      setAfterParam,
      setBeforeParam,
      setLoading,
      records
    );
  }, [pageNum]);

  return (
    <div className="App">
      {!loading && (
        <RedditListContainer items={records} setPageNum={setPageNum} />
      )}

      <div className="loading">{loading && <h3>Loading...</h3>}</div>
    </div>
  );
};
