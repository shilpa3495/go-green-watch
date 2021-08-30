import { ReactComponent as LikeIcon } from "../../../../assets/svg/like.svg";
import { ReactComponent as WatchLaterIcon } from "../../../../assets/svg/watch-later.svg";
import { ReactComponent as PlayListIcon } from "../../../../assets/svg/playlist.svg";
import "./style.css";
import { useVideo } from "../../context";
import { Modal } from "../../../../component/Modal";
import { useModal } from "./context";

export function VideoContent({ video }) {
  const { dispatch } = useVideo();
  const { playlistModal, setPlaylistModal } = useModal();

  const toggleLike = video => {
    video.isLike = !video.isLike;
    if (video.isLike) {
      return dispatch({ type: "addVideoInLike", payload: video });
    } else {
      return dispatch({ type: "removeVideoFromLike", payload: video });
    }
  };

  const toggleWatchLater = video => {
    video.isWatchLater = !video.isWatchLater;
    if (video.isWatchLater) {
      dispatch({ type: "addVideoInWatchLater", payload: video });
    } else {
      return dispatch({ type: "removeVideoFromWatchLater", payload: video });
    }
  };

  const showModal = () => {
    setPlaylistModal(true);
  };

  const hideModal = () => {
    setPlaylistModal(false);
  };

  return (
    <>
      <div className="video-title-container">
        <h2 className="video-title">{video.title}</h2>
        <div className="video-icon-container">
          <button
            onClick={() => toggleLike(video)}
            className={`icon-button video-icon-button ${video.isLike &&
              "video-icon-button-active"}`}
          >
            <LikeIcon className="video-like-icon xs-avatar" />
            Like
          </button>
          <button
            onClick={() => toggleWatchLater(video)}
            className={`icon-button video-icon-button ${video.isWatchLater &&
              "video-icon-button-active"}`}
          >
            <WatchLaterIcon className="video-watch-later-icon xs-avatar" />
            Watch Later
          </button>
          <button
            className="icon-button video-icon-button"
            onClick={() => {
              showModal();
            }}
          >
            <PlayListIcon className="video-playlist-icon xs-avatar" />
            Save
          </button>
        </div>
      </div>
      {playlistModal && (
        <Modal cancelModal={() => hideModal()} playlistVideo={video} />
      )}

      <h4 className="grey-text video-view-time-text">
        <div className="video-view-text">{video.views}</div>
        <div>{video.timeStamp}</div>
      </h4>
      <p className="grey-text">{video.description}</p>
      <div className="video-channel-info">
        <img
          className="avatar-img sm-avatar"
          src={video.channelImage}
          alt="no-channel-logo"
        />
        <h4> {video.channelName}</h4>
      </div>
    </>
  );
}
