export function videoReducer(state, action) {
  switch (action.type) {
    case "addVideoInLike":
      const likedVideoExist = state.like.find(
        likedVideo => likedVideo.id === action.payload.id
      );
      if (likedVideoExist) {
        return { ...state, like: [...state.like] };
      } else {
        return { ...state, like: [...state.like, action.payload] };
      }
    case "removeVideoFromLike":
      action.payload.isLike = false;
      return {
        ...state,
        like: state.like.filter(likeVideo => likeVideo.id !== action.payload.id)
      };
    case "addVideoInWatchLater":
      action.payload.isWatchLater = true;
      const watchLaterExist = state.watchLater.find(
        watchLaterVideo => watchLaterVideo.id === action.payload.id
      );
      if (watchLaterExist) {
        return { ...state, watchLater: [...state.watchLater] };
      } else {
        return { ...state, watchLater: [...state.watchLater, action.payload] };
      }

    case "removeVideoFromWatchLater":
      action.payload.isWatchLater = false;
      return {
        ...state,
        watchLater: state.watchLater.filter(
          watchLaterVideo => watchLaterVideo.id !== action.payload.id
        )
      };

    case "createPlaylist":
      const existPlaylist = state.playlist.find(
        playlist => playlist.name === action.payload.name
      );

      action.payload.video.videoExistInPlaylists = [
        ...action.payload.video.videoExistInPlaylists,
        action.payload.name
      ];
      if (existPlaylist) {
        return {
          ...state,
          playlist: state.playlist.map(video => {
            if (video.name === action.payload.name) {
              return {
                ...existPlaylist,
                videos: [...existPlaylist.videos, action.payload.video]
              };
            }
            return video;
          })
        };
      } else {
        return {
          ...state,
          playlist: [
            ...state.playlist,
            {
              name: action.payload.name,
              videos: [action.payload.video]
            }
          ]
        };
      }

    // case "removeVideoFromPlaylist":
    //   console.log("remove video");

    //   action.payload.video.videoExistInPlaylists = action.payload.video.videoExistInPlaylists.filter(
    //     playlistName => playlistName.name === action.payload.name
    //   );
    //   console.log(
    //     "filterplaylist",
    //     action.payload.video.videoExistInPlaylists.filter(
    //       playlistName => playlistName.name === action.payload.name
    //     )
    //   );

    //   console.log("payload video", action.payload.video);

    // case "removePlaylist":
    //   return {
    //     ...state,
    //     playlist: state.playlist.filter(video => {
    //       return video.name !== action.payload.name;
    //     })
    //   };

    default:
      return state;
  }
}
