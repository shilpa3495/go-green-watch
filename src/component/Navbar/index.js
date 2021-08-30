import LogoIcon from "../../assets/svg/green-leaf-logo.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/github.svg";
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/svg/menu.svg";
import "./style.css";
import { useTheme } from "./context";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="nav fixed-navbar">
      <img src={LogoIcon} className="logo-img" alt="no-logo-icon" />
      <h1 className="logo-heading">GOGreen</h1>
      <ul className="navbar-unordered-list">
        <li className="nav-list-item">
          <GithubIcon className="github-image" />
        </li>
        <li className="nav-list-item" onClick={() => setTheme(!theme)}>
          <MoonIcon className={`moon-image ${!theme && "moon-green-color"}`} />
        </li>
        <li className="nav-list-item hamburger-list-item">
          <HamburgerIcon className="hamburger-image" />
        </li>
      </ul>
    </nav>
  );
}
