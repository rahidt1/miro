import "./navBar.css";
import { miro, arrowRight, earth, arrowDown } from "../../../assets";
import { Button, Image, Link } from "../../utils";

export function NavBar() {
  return (
    <nav className="nav">
      <ul className="navList">
        <Image src={miro} alt="Miro Logo" />

        <li className="flex flex-row">
          <Link className="mr-2 ml-2" href="#">
            Products
          </Link>
          <Image src={arrowDown} />
        </li>
        <li className="flex flex-row">
          <Link className="mr-2" href="#">
            Solutions
          </Link>
          <Image src={arrowDown} />
        </li>
        <li className="flex flex-row">
          <Link className="mr-2" href="#">
            Resources
          </Link>
          <Image src={arrowDown} />
        </li>

        <li>
          <Link className="mr-2" href="#">
            Enterprise
          </Link>
        </li>
        <li>
          <Link className="mr-2" href="#">
            Pricing
          </Link>
        </li>
      </ul>
      <ul className="navList nav2">
        <li className="flex flex-row gap-x-2">
          <Image src={earth} />
          <Link href="#">EN</Link>
        </li>
        <li>
          <Link className="mr-2" href="#">
            Contact Sales
          </Link>
        </li>
        <li>
          <Link className="mr-2" href="#">
            Login
          </Link>
        </li>
        <li>
          <Button>Sign up free</Button>
        </li>
      </ul>
    </nav>
  );
}
