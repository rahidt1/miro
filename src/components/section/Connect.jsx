import {
  SectionImage,
  TextWrapper,
  Image,
  H1,
  P,
  Button,
  BorderBottom,
} from "../utils";
import { sectionImage3 } from "../../assets";

export function Connect() {
  return (
    <SectionImage className="justify-between">
      <Image src={sectionImage3} size="w-full max-w-xl"></Image>
      <TextWrapper className="w-full max-w-sm">
        <H1 className="mt-20">
          Connect
          <br /> your tools, close your tabs
        </H1>
        <P className="mt-8">
          Whether you want edit your Google Docs, resolve Jira issues or
          collaborate over zoom, Miro has 100+ integrations with tools you
          already use and love.
        </P>
        <Button className="mt-8 p-0 w-36 text-start" color="text-blue-500">
          Learn More
        </Button>
        <BorderBottom size="w-24" color="border-blue-500" />
      </TextWrapper>
    </SectionImage>
  );
}
