import { ListCard } from "../../component/ListCard";
import { useNavigate } from "react-router";
import { useHistory } from "../Home/Component/VideoCard/context";

export function History() {
  const navigate = useNavigate();
  const getToHome = () => {
    navigate("/");
  };
  const { history, setHistory } = useHistory();
  const removeVideoFromHistory = historyVideo => {
    setHistory(history.filter(video => video.id !== historyVideo.id));
  };
  return (
    <div className="stacked-list-container">
      <div className="stacked-list-header">
        <span>History</span>
      </div>
      <div className="stacked-list-body">
        {history.length === 0 ? (
          <div style={{ padding: "0.9rem" }}>
            <h2>You do not have any in History</h2>
            <p>You need to watch the videos</p>
            <button
              className="primary-button button-medium"
              onClick={() => getToHome()}
            >
              Home
            </button>
          </div>
        ) : (
          <>
            {history.map(historyVideo => (
              <ListCard
                key={historyVideo.id}
                id={historyVideo.id}
                title={historyVideo.title}
                channelName={historyVideo.channelName}
                image={historyVideo.image}
                onclick={() => removeVideoFromHistory(historyVideo)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
