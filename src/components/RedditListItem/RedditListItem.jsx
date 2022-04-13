import { DEFAULT_IMG } from "../../constants/constants";
import "./RedditListItem.css";

export const RedditListItem = ({
  title,
  thumbnail,
  subRedditName,
  permaLink,
  innerRef,
}) => {
  return (
    <div ref={innerRef} className="reddit-list--item">
      <div className="reddit-list--title">
        <a href={`https://www.reddit.com/${permaLink}`}>
          <h2>{title}</h2>
        </a>
      </div>

      <img
        src={thumbnail ? thumbnail : DEFAULT_IMG}
        alt={title}
        className="reddit-list--thumbnail"
      />
      <div className="reddit-list--subredditname">
        <h3>{subRedditName}</h3>
      </div>
    </div>
  );
};
