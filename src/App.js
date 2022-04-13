import { fetchRedditData } from "./api/fetchRedditData";
import "./App.css";

import { useState, useEffect } from "react";
import { RedditListContainer } from "./components/RedditListContainer/RedditListContainer";

export const App = () => {
  const [records, setRecords] = useState([]);
  const [afterParam, setAfterParam] = useState(null);
  const [beforeParam, setBeforeParam] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRedditData(
      afterParam,
      setRecords,
      setAfterParam,
      setBeforeParam,
      setLoading
    );
  }, []);

  return (
    <div className="App">
      <div className="loading">{loading && <h3>Loading...</h3>}</div>

      {!loading && <RedditListContainer items={records} />}
    </div>
  );
};
