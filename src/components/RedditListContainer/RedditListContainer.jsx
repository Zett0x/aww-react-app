import React from "react";
import { RedditListItem } from "../RedditListItem/RedditListItem";
import "./RedditListContainer.css";

export const RedditListContainer = ({ items }) => {
  console.log(items);
  return (
    <ul className="reddit-list--container">
      {items.map((item) => (
        <RedditListItem
          key={item.data.id}
          title={item.data.title}
          thumbnail={item.data.thumbnail}
          subRedditName={item.data.subreddit_name_prefixed}
          permaLink={item.data.permalink}
        />
      ))}
    </ul>
  );
};
