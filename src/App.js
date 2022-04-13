import { fetchRedditData } from "./api/fetchRedditData";
import "./App.css";

import { useState, useEffect } from "react";

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
  }, [afterParam]);

  console.log(records);

  return (
    <div className="App">
      <div className="loading">{loading && <h3>Loading...</h3>}</div>
      <div className="records">
        {!loading &&
          records.map((record, i) => <li key={i}>{record.data.author}</li>)}
      </div>
    </div>
  );
};
