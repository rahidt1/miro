import {
  Button,
  H1,
  P,
  Image,
  SectionImage,
  TextWrapper,
  BorderBottom,
} from "../Utils";
import { sectionImage2 } from "../../assets";

export function Work() {
  return (
    <SectionImage className="mt-0 lg:gap-y-0">
      <TextWrapper className=" lg:gap-y-0">
        <H1 className="mt-36 lg:text-center lg:text-4xl">
          Work together, wherever you work
        </H1>
        <P className="mt-8 lg:text-center">
          In the office, remote or mix of the two, with Miro, your team can
          connect, collaborate and co-create in one space no matter where you
          are.
        </P>
        <div className="mt-8">
          <Button className="mt-8 w-36 p-0 text-start " color="text-blue-500">
            Learn More
          </Button>
          <BorderBottom size="w-24" color="border-blue-500" />
        </div>
      </TextWrapper>
      <Image src={sectionImage2} size="w-full max-w-xl"></Image>
    </SectionImage>
  );
}
