import "./style.css";
import { Link } from "react-router-dom";
import { useHistory } from "./context";

export function VideoCard({ video }) {
  const { history, setHistory } = useHistory();
  const addVideoInHistory = video => {
    const existHistoryVideo = history.find(
      historyVideo => historyVideo.id === video.id
    );
    if (existHistoryVideo) {
      return [...history];
    } else {
      setHistory([...history, video]);
    }
  };
  return (
    <div className="vertical-product-card">
      <div
        className="background-property vertical-product-image"
        style={{
          background: ` linear-gradient(rgba(73, 75, 77, 0.1), rgba(73, 75, 77,0.1)), url(${video.image})`
        }}
      ></div>
      <div className="vertical-product-content-container video-card-content-container">
        <img
          className="avatar-img sm-avatar"
          src={video.channelImage}
          alt="no-channel-logo"
        />
        <div>
          <Link
            to={`/video/${video.id}`}
            className="vertical-product-heading video-card-heading"
            onClick={() => addVideoInHistory(video)}
          >
            <span>{video.title}</span>
          </Link>
          <div className="grey-text vertical-product-description video-card-description">
            {video.channelName}
          </div>
          <div className="grey-text vertical-product-description video-card-description video-card-view-time-container">
            <div className="video-card-view-text">{video.views}</div>
            <div>{video.timeStamp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
