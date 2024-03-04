import { H1, SectionImage, TextWrapper, Image, Button, P } from "../utils";
import { Point } from "../utils";
import {
  sectionImage5,
  SectionLogo1,
  SectionLogo2,
  SectionLogo3,
  SectionLogo4,
  tick,
} from "../../assets";

export function BuildTeam() {
  return (
    <SectionImage className="flex-col">
      <H1>Build for all kinds of team</H1>
      <div className="mt-4 flex gap-x-3 ">
        <Point color="bg-zinc-100">UX & Design</Point>
        <Point>Marketing</Point>
        <Point>Product Management</Point>
        <Point>Engineering</Point>
        <Point>Consultants</Point>
        <Point>Agile Coaches</Point>
        <Point>Sales</Point>
      </div>
      <SectionImage>
        <TextWrapper>
          <ul className="flex flex-col gap-y-4 mt-8">
            <li className="flex gap-x-4 opacity-60">
              <Image src={tick} />
              <p>Build low-fi wireframes</p>
            </li>
            <li className="flex gap-x-4 opacity-60">
              <Image src={tick} />
              <p>Involve stakeholders in the design process</p>
            </li>
            <li className="flex gap-x-4 opacity-60">
              <Image src={tick} />
              <p>Run engaging design workshops</p>
            </li>
          </ul>

          <Button className="mt-8 p-0 w-36 text-start" color="text-blue-500">
            Learn More
          </Button>

          <P className='mt-12'>Integrate your favorite tools</P>
          <div className="mt-4 flex gap-x-4">
            <Image size="w-6" src={SectionLogo1} />
            <Image size="w-8" src={SectionLogo2} />
            <Image size="w-6" src={SectionLogo3} />
            <Image size="w-6" src={SectionLogo4} />
          </div>
        </TextWrapper>
        <Image src={sectionImage5} size="w-full max-w-2xl" />
      </SectionImage>
    </SectionImage>
  );
}
