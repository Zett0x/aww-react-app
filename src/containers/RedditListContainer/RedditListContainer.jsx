import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingRecords } from "../../actions/records";

import { RedditListItem } from "../../components/RedditListItem/RedditListItem";
import "./RedditListContainer.css";

/* ITEM LIST CONTAINER 

  This component loop over the items and render a RedditListItem component per each iteration.

  This component uses the Intersection Observer API for observing the div with the class "observed"

*/

export const RedditListContainer = React.memo(({ items }) => {
  const dispatch = useDispatch();
  const { after } = useSelector((state) => state.records);
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          // IF the last element of the list is visible on the screen, we load more data calling the action "startLoadingRecords"
          dispatch(startLoadingRecords(after));
        }
      },
      { threshold: 1 }
    )
  );

  React.useEffect(() => console.log("Container Rendered"), []);

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

        <div ref={setLastElement} className="observed"></div>
      </div>
    </>
  );
});
