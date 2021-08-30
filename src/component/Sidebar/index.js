import { NavLink } from "react-router-dom";
import "./style.css";

export function Sidebar() {
  return (
    <div id="sidebar" className="sidebar-mobile-collapse">
      <div className="sidebar-nav">
        <div className="sidebar-header">
          <h2 className="sidebar-heading">Pages</h2>
          <div
            className="sidebar-header-close-img background-property"
            id="hide-sidebar"
          ></div>
        </div>

        <ul className="sidebar-nav-unordered-list">
          <NavLink
            end
            to="/"
            className="sidebar-nav-link sidebar-nav-item"
            activeClassName="sidebar-list-active"
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/history"
            className="sidebar-nav-link sidebar-nav-item"
            activeClassName="sidebar-list-active"
          >
            <li>History</li>
          </NavLink>

          <NavLink
            to="/watchlater"
            className="sidebar-nav-link sidebar-nav-item"
            activeClassName="sidebar-list-active"
          >
            <li>Watch Later</li>
          </NavLink>

          <NavLink
            to="/liked"
            className="sidebar-nav-link sidebar-nav-item"
            activeClassName="sidebar-list-active"
          >
            <li>Liked Videos</li>
          </NavLink>

          <NavLink
            to="/playlist"
            className="sidebar-nav-link sidebar-nav-item"
            activeClassName="sidebar-list-active"
          >
            <li>Playlist</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
