import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./pages/video/context";
import { ModalProvider } from "./pages/video/component/VideoContent/context";
import { HistoryProvider } from "./pages/Home/Component/VideoCard/context";
import { ThemeProvider } from "./component/Navbar/context";
import { SelectedCategoryProvider } from "./pages/Home/Component/HomeMainContent/context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SelectedCategoryProvider>
        <HistoryProvider>
          <ModalProvider>
            <VideoProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </VideoProvider>
          </ModalProvider>
        </HistoryProvider>
      </SelectedCategoryProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
