import "./navBar.css";
import { miro } from "../../../assets";

export function NavBar() {
  return (
    <nav className="nav">
      <ul className="navList">
        <img src={miro} alt="Miro Logo" className="navLogo" />
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Solutions</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Enterprise</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
      <ul className="navList nav2">
        <li>
          <a href="#">EN</a>
        </li>
        <li>
          <a href="#">Contact Sales</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a className="button" href="#">
            Sign up free
          </a>
        </li>
      </ul>
    </nav>
  );
}
