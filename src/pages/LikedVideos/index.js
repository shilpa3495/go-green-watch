import { useVideo } from "../video/context";
import { ListCard } from "../../component/ListCard";
import { useNavigate } from "react-router";

export function LikedVideos() {
  const { state, dispatch } = useVideo();
  const navigate = useNavigate();
  const getToHome = () => {
    navigate("/");
  };

  return (
    <div className="stacked-list-container">
      <div className="stacked-list-header">
        <span>Liked Videos</span>
      </div>
      <div className="stacked-list-body">
        {state.like.length === 0 ? (
          <div style={{ padding: "0.9rem" }}>
            <h2>You do not have any liked videos</h2>
            <p>You need to liked the videos</p>
            <button
              className="primary-button button-medium"
              onClick={() => getToHome()}
            >
              Home
            </button>
          </div>
        ) : (
          <>
            {state.like.map(likeVideo => (
              <ListCard
                key={likeVideo.id}
                id={likeVideo.id}
                title={likeVideo.title}
                channelName={likeVideo.channelName}
                image={likeVideo.image}
                onclick={() =>
                  dispatch({
                    type: "removeVideoFromLike",
                    payload: likeVideo
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
