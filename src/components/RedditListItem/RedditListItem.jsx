import "./RedditListItem.css";
export const RedditListItem = ({ title, thumbnail, subRedditName }) => {
  console.log(thumbnail);
  return (
    <li className="reddit-list--item">
      <div className="reddit-list--title">{title}</div>

      <img src={thumbnail} alt={title} className="reddit-list--thumbnail" />
      <div className="reddit-list--subredditname">{subRedditName}</div>
    </li>
  );
};
