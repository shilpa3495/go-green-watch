import { useState } from "react";
import { VideoCard } from "../VideoCard";
import { videoData } from "../../../../videoData";
import "./style.css";

export function HomeMainContent() {
  const [selectedCategory, setSelectedCategory] = useState("Begineer");
  const getFilteredData = () => {
    let data = videoData.category.find(
      category => category.name === selectedCategory
    );
    return data.video;
  };
  const filteredData = getFilteredData();
  return (
    <>
      {videoData.category.map(category => (
        <button
          class="button-outline-primary button-small"
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
      <div className="video-card-container">
        {filteredData.map(video => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </div>
    </>
  );
}
