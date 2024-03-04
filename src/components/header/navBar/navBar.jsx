import { NavList } from "./NavList";
import { NavItem } from "./NavItem";
import { miro, earth, arrowDown } from "../../../assets";

import { Button, Image, Link } from "../../utils";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center min-h-24 max-w-7xl mx-auto my-0">
      <NavList className="flex items-center gap-x-3 list-none">
        <Image src={miro} alt="Miro Logo" />
        <NavItem className="flex flex-row">
          <Link className="mr-2 ml-2" href="#">
            Products
          </Link>
          <Image src={arrowDown} />
        </NavItem>
        <NavItem className="flex flex-row">
          <Link className="mr-2" href="#">
            Solutions
          </Link>
          <Image src={arrowDown} />
        </NavItem>
        <NavItem className="flex flex-row">
          <Link className="mr-2" href="#">
            Resources
          </Link>
          <Image src={arrowDown} />
        </NavItem>
        <NavItem>
          <Link className="mr-2" href="#">
            Enterprise
          </Link>
        </NavItem>
        <NavItem>
          <Link className="mr-2" href="#">
            Pricing
          </Link>
        </NavItem>
      </NavList>

      <NavList>
        <NavItem className="flex flex-row gap-x-2">
          <Image src={earth} />
          <Link href="#">EN</Link>
        </NavItem>
        <NavItem>
          <Link className="mr-2" href="#">
            Contact Sales
          </Link>
        </NavItem>
        <NavItem>
          <Link className="mr-2" href="#">
            Login
          </Link>
        </NavItem>
        <NavItem>
          <Button color="bg-blue-500" size="px-4">
            Sign up free
          </Button>
        </NavItem>
      </NavList>
    </nav>
  );
}
