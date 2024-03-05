import { H1, SectionImage, TextWrapper, Image, Button, P } from "../utils/index.js";
import { Point } from "../utils/index.js";
import { tick } from "../../assets/index.js";
import { BUILDTEAMTEXT } from "../../data.js";
import { useState } from "react";

export function BuildTeam() {
  const [selectedPoint, setSelectedPoint] = useState("ux");

  function handleSelect(point) {
    setSelectedPoint(point);
  }

  return (
    <SectionImage className="xs:mt-0 flex-col lg:gap-y-0">
      <H1 className='lg:text-4xl" lg:text-center'>
        Build for all kinds of team
      </H1>
      <div className="xs:grid-cols-2 mt-4 grid grid-cols-7 gap-x-3 lg:grid-cols-4 sm:grid-cols-3">
        <Point
          isSelected={selectedPoint === "ux"}
          onClick={() => handleSelect("ux")}
        >
          UX
        </Point>
        <Point
          isSelected={selectedPoint === "marketing"}
          onClick={() => handleSelect("marketing")}
        >
          Marketing
        </Point>
        <Point
          isSelected={selectedPoint === "product"}
          onClick={() => handleSelect("product")}
        >
          Product
        </Point>
        <Point
          isSelected={selectedPoint === "engineering"}
          onClick={() => handleSelect("engineering")}
        >
          Engineering
        </Point>
        <Point
          isSelected={selectedPoint === "consultant"}
          onClick={() => handleSelect("consultant")}
        >
          Consultants
        </Point>
        <Point
          isSelected={selectedPoint === "agile"}
          onClick={() => handleSelect("agile")}
        >
          Agile Coaches
        </Point>
        <Point
          isSelected={selectedPoint === "sales"}
          onClick={() => handleSelect("sales")}
        >
          Sales
        </Point>
      </div>
      <SectionImage className="lg:mt-0 lg:pt-0 ">
        <TextWrapper>
          <ul className="mt-8 flex flex-col gap-y-4 lg:text-start ">
            {BUILDTEAMTEXT[selectedPoint].list.map((item) => (
              <li className="flex gap-x-4 opacity-60">
                <Image src={tick} />
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <Button
            className=" lg:text-centermt-8 w-36 p-0 text-start"
            color="text-blue-500"
          >
            Learn More
          </Button>

          <P className="mt-12 lg:mt-8 lg:text-center">
            Integrate your favorite tools
          </P>
          <div className="mt-4 flex gap-x-4 lg:text-center">
            {BUILDTEAMTEXT[selectedPoint].logo.map((logo) => (
              <Image size="w-6" src={logo} />
            ))}
          </div>
        </TextWrapper>
        <Image
          src={BUILDTEAMTEXT[selectedPoint].image}
          size="w-full max-w-2xl"
        />
      </SectionImage>
    </SectionImage>
  );
}
