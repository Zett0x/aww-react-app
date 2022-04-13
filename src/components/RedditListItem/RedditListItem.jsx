import "./RedditListItem.css";

export const RedditListItem = ({
  title,
  thumbnail,
  subRedditName,
  permaLink,
}) => {
  return (
    <li className="reddit-list--item">
      <div className="reddit-list--title">
        <a href={`https://www.reddit.com/${permaLink}`}>
          <h2>{title}</h2>
        </a>
      </div>

      <img src={thumbnail} alt={title} className="reddit-list--thumbnail" />
      <div className="reddit-list--subredditname">
        <h3>{subRedditName}</h3>
      </div>
    </li>
  );
};
