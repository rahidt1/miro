import { SectionImage, Image, TextWrapper, H2, P, Button } from "../utils";
import { sectionImage4 } from "../../assets";

export function Way() {
  return (
    <SectionImage className="relative justify-center ">
      <Image src={sectionImage4}></Image>
      <TextWrapper className="absolute bottom-1/3 right-40 items-center">
        <H2 className="mb-1">The ways we work</H2>
        <P className="text-sm opacity-100">
          How has our relationship with work has changed
        </P>
        <Button size="w-full max-w-36" className="mt-2 bg-blue-500 text-xs">
          View the report
        </Button>
      </TextWrapper>
    </SectionImage>
  );
}
