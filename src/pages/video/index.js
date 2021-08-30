import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./style.css";
import { VideoContent } from "./component/VideoContent";
import { videoData } from "../../videoData";

export function Video() {
  let { videoId } = useParams();

  const video = videoData.category[0].video.find(
    videoItem => videoItem.id === videoId
  );

  return (
    <>
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?v=${video.id}`}
        controls
        width="100%"
      />
      <VideoContent video={video} id={videoId} />
    </>
  );
}
