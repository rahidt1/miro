import { NavList } from "./NavList";
import { NavItem } from "./NavItem";
import { miro, earth, arrowDown, menu } from "../../../assets";

import { Button, Image, Link } from "../../utils";
import { useState } from "react";

export function NavBar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow((s) => !s);
    console.log("Clicked");
    console.log(show);
  }

  return (
    <nav className="relative mx-auto my-0 flex w-full max-w-7xl items-center justify-between p-8  lg:flex-col lg:gap-y-2">
      <div className="flex gap-x-4 lg:flex-col lg:items-center lg:gap-y-8">
        <Image
          src={miro}
          alt="Miro Logo"
          className="xs:static left-8 top-8 lg:absolute"
        />

        <NavList
          className={`xs:mt-0 flex list-none items-center gap-x-3 lg:mt-12 lg:flex-col lg:items-center lg:gap-y-2 ${show ? "" : "lg:hidden"}`}
        >
          <div
            className={`flex gap-x-3 lg:flex-col lg:items-center lg:gap-y-2`}
          >
            <NavItem className="flex flex-row">
              <Link className="ml-2 mr-2 after:w-0" href="#">
                Products
              </Link>
              <Image className="lg:hidden md:hidden" src={arrowDown} />
            </NavItem>
            <NavItem className="flex flex-row">
              <Link className="mr-2" href="#">
                Solutions
              </Link>
              <Image className="lg:hidden md:hidden" src={arrowDown} />
            </NavItem>
            <NavItem className="flex flex-row">
              <Link className="mr-2" href="#">
                Resources
              </Link>
              <Image className="lg:hidden md:hidden" src={arrowDown} />
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
          </div>
        </NavList>
      </div>
      <NavList
        className={`lg:flex-col lg:items-center lg:gap-y-2 ${show ? "" : "lg:hidden"}`}
      >
        <div className="flex gap-x-3 lg:flex-col lg:items-center lg:gap-y-2">
          <NavItem className="flex flex-row gap-x-2">
            <Image className="lg:hidden md:hidden" src={earth} />
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
        </div>
      </NavList>

      <Image
        size="w-8"
        src={menu}
        alt="Menu Logo"
        className="absolute right-8 top-8 hidden lg:inline-block"
        onClick={() => handleClick()}
      />
    </nav>
  );
}
