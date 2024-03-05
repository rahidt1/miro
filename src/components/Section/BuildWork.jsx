import { H1, SectionImage, TextWrapper, H2, P, Image, Button } from "../Utils";
import { Point } from "../Utils";
import { BUILDWORKTEST } from "../../data";
import { useState } from "react";

export function BuildWork() {
  const [selectedPoint, setSelectedPoint] = useState("brainstorm");

  function handleSelect(point) {
    setSelectedPoint(point);
  }

  return (
    <SectionImage className="xs:mt-0 flex-col lg:gap-y-6">
      <H1 className='lg:text-4xl" lg:text-center'>
        Build for the way you work
      </H1>
      <div className="xs:grid-cols-2 mt-4 grid grid-cols-7 lg:grid-cols-4 sm:grid-cols-3">
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
          className="self-center"
          isSelected={selectedPoint === "meeting"}
          onClick={() => handleSelect("meeting")}
        >
          Meetings
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
          Research
        </Point>

        <Point
          isSelected={selectedPoint === "planning"}
          onClick={() => handleSelect("planning")}
        >
          Planning
        </Point>
      </div>
      <SectionImage className="lg:mt-0 lg:gap-y-0 lg:pt-0">
        <TextWrapper>
          <H2 className="font-normal lg:text-center">
            {BUILDWORKTEST[selectedPoint].title}
          </H2>
          <P className="lg:text-center">
            {BUILDWORKTEST[selectedPoint].description}
          </P>
          <Button
            className="mt-8 w-36 p-0 text-start lg:text-center"
            color="text-blue-500"
          >
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
