import { H1, SectionImage, TextWrapper, H2, P, Image, Button } from "../utils";
import { Point } from "../utils";
import { sectionImage1 } from "../../assets";

export function BuildWork() {
  return (
    <SectionImage className="flex-col">
      <H1>Build for the way you work</H1>
      <div className="mt-4 flex gap-x-3 ">
        <Point color="bg-zinc-100">Brainstorm</Point>
        <Point>Diagramming</Point>
        <Point>Meetings & Workshop</Point>
        <Point>Scrum Events</Point>
        <Point>Mapping</Point>
        <Point>Research & Design</Point>
        <Point>Strategic Planning</Point>
      </div>
      <SectionImage>
        <TextWrapper>
          <H2 className="font-normal">Brainstorming</H2>
          <P>
            Unleash creating ideas and build on them with the help of sticky
            notes,images,mind maps, videos, drawing capabilities - the list goes
            on.
          </P>
          <Button className="mt-8 p-0 w-36 text-start" color="text-blue-500">
            Learn More
          </Button>
        </TextWrapper>
        <Image src={sectionImage1} size="w-full max-w-2xl" />
      </SectionImage>
    </SectionImage>
  );
}
