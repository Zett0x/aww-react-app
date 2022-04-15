import React from "react";
import { DEFAULT_IMG } from "../../constants/constants";
import "./RedditListItem.css";

/* ITEM COMPONENT
This component render an item List


*/

export const RedditListItem = React.memo(
  ({ title, thumbnail, subRedditName, permaLink }) => {
    React.useEffect(() => console.log("Item rendered"), []);
    return (
      <div className="reddit-list--item">
        <div className="reddit-list--title">
          <a
            href={`https://www.reddit.com/${permaLink}`}
            target={"_blank"}
            rel="noreferrer"
          >
            <h2>{title}</h2>
          </a>
        </div>

        <img
          src={thumbnail.includes("http") ? thumbnail : DEFAULT_IMG}
          className="reddit-list--thumbnail"
          alt="pet"
        />
        <div className="reddit-list--subredditname">
          <h3>{subRedditName}</h3>
        </div>
      </div>
    );
  }
);
