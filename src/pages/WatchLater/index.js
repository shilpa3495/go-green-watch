import { useVideo } from "../video/context";
import { ListCard } from "../../component/ListCard";
import { useNavigate } from "react-router";

export function WatchLater() {
  const { state, dispatch } = useVideo();
  const navigate = useNavigate();
  const getToHome = () => {
    navigate("/");
  };

  return (
    <div className="stacked-list-container">
      <div class="stacked-list-header">
        <span>Watch Later Videos</span>
      </div>
      <div class="stacked-list-body">
        {state.watchLater.length === 0 ? (
          <div style={{ padding: "0.9rem" }}>
            <h2>You do not have any watch later videos</h2>
            <p>You need to add watch later videos</p>
            <button
              className="primary-button button-medium"
              onClick={() => getToHome()}
            >
              Home
            </button>
          </div>
        ) : (
          <>
            {state.watchLater.map(watchLaterVideo => (
              <ListCard
                key={watchLaterVideo.id}
                id={watchLaterVideo.id}
                title={watchLaterVideo.title}
                channelName={watchLaterVideo.channelName}
                image={watchLaterVideo.image}
                onclick={() =>
                  dispatch({
                    type: "removeVideoFromWatchLater",
                    payload: watchLaterVideo
                  })
                }
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
