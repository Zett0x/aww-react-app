import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingRecords } from "../../actions/records";

import { RedditListItem } from "../../components/RedditListItem/RedditListItem";
import "./RedditListContainer.css";

/* ITEM LIST CONTAINER 

  This component loop over the items and render a RedditListItem component per each iteration.

  This component uses the Intersection Observer API for observing the div with the class "observed"

*/

export const RedditListContainer = () => {
  const dispatch = useDispatch();
  const {
    after,
    records: items,
    loading,
  } = useSelector((state) => state.records);
  const [lastElement, setLastElement] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(startLoadingRecords(after));
  }, [page]);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          console.log("en vista");
          // IF the last element of the list is visible on the screen, we load more data calling the action "startLoadingRecords"
          //dispatch(startLoadingRecords(after));
          setPage((prevPage) => prevPage + 1);
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
              <RedditListItem
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
            <RedditListItem
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              subRedditName={item.subreddit_name_prefixed}
              permaLink={item.permalink}
            />
          );
        })}

        <div className="loading">{loading && <h3>Loading...</h3>}</div>
      </div>
    </>
  );
};
