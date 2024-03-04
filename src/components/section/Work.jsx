import {
  Button,
  H1,
  P,
  Image,
  SectionImage,
  TextWrapper,
  BorderBottom,
} from "../utils";
import { sectionImage2 } from "../../assets";

export function Work() {
  return (
    <SectionImage>
      <TextWrapper>
        <H1 className="mt-36">Work together, wherever you work</H1>
        <P className="mt-8">
          In the office, remote or mix of the two, with Miro, your team can
          connect, collaborate and co-create in one space no matter where you
          are.
        </P>
        <Button className="mt-8 p-0 w-36 text-start" color="text-blue-500">
          Learn More
        </Button>
        <BorderBottom />
      </TextWrapper>
      <Image src={sectionImage2} size="w-full max-w-xl"></Image>
    </SectionImage>
  );
}
