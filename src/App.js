import { fetchRedditData } from "./api/fetchRedditData";
import "./App.css";

import { useState, useEffect } from "react";
import { RedditListContainer } from "./containers/RedditListContainer/RedditListContainer";
import { IMG_LOADING } from "./constants/constants";

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

      <div className="loading">
        {loading && <img src={IMG_LOADING} alt="image loading" />}
      </div>
    </div>
  );
};
