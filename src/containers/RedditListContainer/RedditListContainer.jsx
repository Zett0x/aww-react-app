import React, { useRef, useState, useEffect } from "react";

import {
  RedditListItem,
  MemoizedRedditListItem,
} from "../../components/RedditListItem/RedditListItem";

export const RedditListContainer = ({ items, setPageNum }) => {
  console.log("redditlistcontainer called");
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPageNum((no) => no + 1);
        }
      },
      { threshold: 1 }
    )
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
    <>
      <div className="reddit-list--container">
        {items.map((item, i) => {
          if (i === items.length - 1) {
            return (
              <MemoizedRedditListItem
                key={item.id}
                innerRef={setLastElement}
                title={item.title}
                thumbnail={item.thumbnail}
                subRedditName={item.subreddit_name_prefixed}
                permaLink={item.permalink}
              />
            );
          }
          return (
            <MemoizedRedditListItem
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              subRedditName={item.subreddit_name_prefixed}
              permaLink={item.permalink}
            />
          );
        })}
      </div>
    </>
  );
};
export const MemoizedRedditListContainer = React.memo(RedditListContainer);
