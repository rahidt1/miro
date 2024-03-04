import { H1, SectionImage, TextWrapper, H2, P, Image, Button } from "../utils";
import { Point } from "../utils";
import { BUILDWORKTEST } from "../../data";
import { useState } from "react";

export function BuildWork() {
  const [selectedPoint, setSelectedPoint] = useState("brainstorm");

  function handleSelect(point) {
    setSelectedPoint(point);
  }

  return (
    <SectionImage className="flex-col">
      <H1>Build for the way you work</H1>
      <div className="mt-4 flex gap-x-3 ">
        <Point
          isSelected={selectedPoint === "brainstorm"}
          onClick={() => handleSelect("brainstorm")}
        >
          Brainstorm
        </Point>
        <Point
          isSelected={selectedPoint === "diagramming"}
          onClick={() => handleSelect("diagramming")}
        >
          Diagramming
        </Point>
        <Point
          isSelected={selectedPoint === "meeting"}
          onClick={() => handleSelect("meeting")}
        >
          Meetings & Workshop
        </Point>
        <Point
          isSelected={selectedPoint === "scrum"}
          onClick={() => handleSelect("scrum")}
        >
          Scrum Events
        </Point>
        <Point
          isSelected={selectedPoint === "mapping"}
          onClick={() => handleSelect("mapping")}
        >
          Mapping
        </Point>
        <Point
          isSelected={selectedPoint === "research"}
          onClick={() => handleSelect("research")}
        >
          Research & Design
        </Point>
        <Point
          isSelected={selectedPoint === "planning"}
          onClick={() => handleSelect("planning")}
        >
          Strategic Planning
        </Point>
      </div>
      <SectionImage>
        <TextWrapper>
          <H2 className="font-normal">{BUILDWORKTEST[selectedPoint].title}</H2>
          <P>{BUILDWORKTEST[selectedPoint].description}</P>
          <Button className="mt-8 p-0 w-36 text-start" color="text-blue-500">
            Learn More
          </Button>
        </TextWrapper>
        <Image
          src={BUILDWORKTEST[selectedPoint].image}
          size="w-full max-w-2xl"
        />
      </SectionImage>
    </SectionImage>
  );
}
