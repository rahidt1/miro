import { SectionImage, Image, TextWrapper, H2, P, Button } from "../utils";
import { sectionImage4 } from "../../assets";

export function Way() {
  return (
    <SectionImage className="relative justify-center ">
      <Image src={sectionImage4}></Image>
      <TextWrapper className="items-center absolute right-40 bottom-1/3">
        <H2 className="mb-1">The ways we work</H2>
        <P className="text-sm opacity-100">
          How has our relationship with work has changed
        </P>
        <Button size="w-full max-w-36" className="bg-blue-500 text-xs mt-2">
          View the report
        </Button>
      </TextWrapper>
    </SectionImage>
  );
}
