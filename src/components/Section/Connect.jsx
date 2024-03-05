import {
  SectionImage,
  TextWrapper,
  Image,
  H1,
  P,
  Button,
  BorderBottom,
} from "../Utils";
import { sectionImage3 } from "../../assets";

export function Connect() {
  return (
    <SectionImage className="lg:gap-y-0">
      <Image src={sectionImage3} size="w-full max-w-lg"></Image>
      <TextWrapper className="w-full max-w-sm">
        <H1 className="mt-20 lg:text-center lg:text-4xl">
          Connect
          <br /> your tools, close your tabs
        </H1>
        <P className="mt-8 lg:text-center">
          Whether you want edit your Google Docs, resolve Jira issues or
          collaborate over zoom, Miro has 100+ integrations with tools you
          already use and love.
        </P>
        <div className="mt-8">
          <Button className="mt-8 w-36 p-0 text-start" color="text-blue-500">
            Learn More
          </Button>
          <BorderBottom size="w-24" color="border-blue-500" />
        </div>
      </TextWrapper>
    </SectionImage>
  );
}
