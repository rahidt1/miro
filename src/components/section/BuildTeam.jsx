import { H1, SectionImage, TextWrapper, Image, Button, P } from "../utils";
import { Point } from "../utils";
import { tick } from "../../assets";
import { BUILDTEAMTEXT } from "../../data.js";
import { useState } from "react";

export function BuildTeam() {
  const [selectedPoint, setSelectedPoint] = useState("ux");

  function handleSelect(point) {
    setSelectedPoint(point);
  }

  return (
    <SectionImage className="flex-col">
      <H1>Build for all kinds of team</H1>
      <div className="mt-4 flex gap-x-3 ">
        <Point
          isSelected={selectedPoint === "ux"}
          onClick={() => handleSelect("ux")}
        >
          UX & Design
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
          Product Management
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
      <SectionImage>
        <TextWrapper>
          <ul className="mt-8 flex flex-col gap-y-4">
            {BUILDTEAMTEXT[selectedPoint].list.map((item) => (
              <li className="flex gap-x-4 opacity-60">
                <Image src={tick} />
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <Button className="mt-8 w-36 p-0 text-start" color="text-blue-500">
            Learn More
          </Button>

          <P className="mt-12">Integrate your favorite tools</P>
          <div className="mt-4 flex gap-x-4">
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
