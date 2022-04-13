import React, { useRef, useState, useEffect } from "react";
import { RedditListItem } from "../../components/RedditListItem/RedditListItem";
import "./RedditListContainer.css";

export const RedditListContainer = ({ items, setPageNum }) => {
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no) => no + 1);
      }
    })
  );

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <div className="reddit-list--container">
      {items.map((item, i) => {
        if (i === items.length - 1) {
          return (
            <RedditListItem
              key={item.data.id}
              innerRef={setLastElement}
              title={item.data.title}
              thumbnail={item.data.thumbnail}
              subRedditName={item.data.subreddit_name_prefixed}
              permaLink={item.data.permalink}
            />
          );
        }
        return (
          <RedditListItem
            key={item.data.id}
            title={item.data.title}
            thumbnail={item.data.thumbnail}
            subRedditName={item.data.subreddit_name_prefixed}
            permaLink={item.data.permalink}
          />
        );
      })}
    </div>
  );
};
