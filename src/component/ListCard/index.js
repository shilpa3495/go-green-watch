import "./style.css";
import { Link } from "react-router-dom";

export function ListCard({ id, title, image, channelName, onclick }) {
  return (
    <div className="single-stacked-list-container list-card-container">
      <div
        className="background-property list-card-image"
        style={{
          background: ` linear-gradient(rgba(73, 75, 77, 0.1), rgba(73, 75, 77,0.1)), url(${image})`
        }}
      ></div>
      <div className="stacked-list-description">
        <Link to={`/video/${id}`} className="stacked-list-link">
          {" "}
          <span className="notifiy-user">{title}</span>
        </Link>
        <span className="stacked-list-timestamp">{channelName}</span>
        <button
          className="button-link-primary button-medium stacked-list-remove-button"
          onClick={onclick}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
