import { useVideo } from "../../pages/video/context";
import { useState } from "react";
import { useModal } from "../../pages/video/component/VideoContent/context";
import { ReactComponent as CloseIcon } from "../../assets/svg/cross.svg";
import "./style.css";

export const Modal = ({ cancelModal, playlistVideo }) => {
  const { state, dispatch } = useVideo();
  const { setPlaylistModal } = useModal();
  const [playlistName, setPlaylistName] = useState("");
  const [inputModalError, setInputModalError] = useState(false);
  const [showInput, setShowInput] = useState(true);

  const getPlaylistName = e => {
    setPlaylistName(e.target.value);
  };

  const getPlaylist = () => {
    if (playlistName.length === 0) {
      setInputModalError(true);
    } else {
      setPlaylistModal(false);
      return dispatch({
        type: "createPlaylist",
        payload: {
          name: playlistName,
          video: playlistVideo
        }
      });
    }
  };

  const addPlaylistVideoInWatchLater = e => {
    if (e.target.checked) {
      return dispatch({
        type: "addVideoInWatchLater",
        payload: playlistVideo
      });
    } else {
      return dispatch({
        type: "removeVideoFromWatchLater",
        payload: playlistVideo
      });
    }
  };

  const addPlaylistVideoInExistingPlaylist = (e, playlist) => {
    if (e.target.checked) {
      return dispatch({
        type: "createPlaylist",
        payload: {
          name: playlist.name,
          video: playlistVideo
        }
      });
    } else {
      return dispatch({
        type: "removeVideoFromPlaylist",
        payload: {
          name: playlist.name,
          video: playlistVideo
        }
      });
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-card margin-bottom">
        <div className="modal-header">
          <h4 className="modal-title">Playlist</h4>
          <CloseIcon className="modal-close-icon" onClick={cancelModal} />
        </div>
        <div className="modal-card-body">
          <div className="modal-checkbox-container">
            <input
              type="checkbox"
              checked={playlistVideo.isWatchLater}
              onChange={e => addPlaylistVideoInWatchLater(e)}
            />
            <span>Watchlater</span>
          </div>

          <>
            {state.playlist.map(playlist => (
              <div className="modal-checkbox-container">
                <input
                  type="checkbox"
                  value={playlist.name}
                  checked={playlistVideo.videoExistInPlaylists.includes(
                    playlist.name
                  )}
                  onChange={e =>
                    addPlaylistVideoInExistingPlaylist(e, playlist)
                  }
                />{" "}
                {playlist.name}
              </div>
            ))}
          </>
        </div>
        <div className="modal-footer video-modal-footer">
          {showInput ? (
            <button
              className="button-link-primary button-medium modal-add-create-playlist-button"
              onClick={() => setShowInput(!showInput)}
            >
              + Create Playlist
            </button>
          ) : (
            <>
              <div className="input-container">
                <span className="inside-input-info grey-text">
                  <span className="input-img">
                    <img
                      className="xs-avatar"
                      src="../img/envelope.svg"
                      alt="no-avatar"
                    />
                  </span>
                  <span className="input-line">|</span>
                </span>
                <input
                  type="text"
                  placeholder="Playlist name *"
                  className={`input-field ${inputModalError && "error-input"}`}
                  onChange={e => getPlaylistName(e)}
                />
                {inputModalError && (
                  <div className="error-container small-text">
                    Please enter the playlist name
                  </div>
                )}
              </div>

              <button
                className="primary-button button-small modal-create-playlist-button"
                onClick={() => getPlaylist()}
              >
                Create
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
