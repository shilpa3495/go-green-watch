import "./App.css";
import Home from "./pages/Home/Index";
import { Routes, Route } from "react-router-dom";
import { History } from "./pages/History";
import { WatchLater } from "./pages/WatchLater";
import { LikedVideos } from "./pages/LikedVideos";
import { PlayList } from "./pages/PlayList";

import { Navbar } from "./component/Navbar";
import { Sidebar } from "./component/Sidebar";
import { Video } from "./pages/video";
import { useTheme } from "./component/Navbar/context";
function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`App app-theme-container ${
        theme ? "light-theme" : "dark-theme"
      }`}
    >
      <div className="layout">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="video/:videoId" element={<Video />} />
            <Route path="/history" element={<History />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/liked" element={<LikedVideos />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
