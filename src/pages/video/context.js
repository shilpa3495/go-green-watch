import { useReducer, createContext, useContext } from "react";
import { videoReducer } from "./reducer";

const VideoContext = createContext();

const initialState = {
  like: [],
  watchLater: [],
  playlist: []
};

export function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(videoReducer, initialState);
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
}
