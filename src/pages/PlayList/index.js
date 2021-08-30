import { useVideo } from "../video/context";
import { ListCard } from "../../component/ListCard";

export function PlayList() {
  const { state, dispatch } = useVideo();

  return (
    <div className="stacked-list-container">
      <div className="stacked-list-header">
        <span>{state.playlist[0].name}</span>
      </div>
      <div className="stacked-list-body">
        <>
          {state.playlist[0].videos.map(playlistVideo => (
            <ListCard
              key={playlistVideo.id}
              id={playlistVideo.id}
              title={playlistVideo.title}
              channelName={playlistVideo.channelName}
              image={playlistVideo.image}
              onclick={() =>
                dispatch({
                  type: "removeVideoFromLike",
                  payload: playlistVideo
                })
              }
            />
          ))}
        </>
        {/* )} */}
      </div>
    </div>
  );
}
