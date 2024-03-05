import { SectionImage, H1, Button, Image, P } from "../Utils";
import {
  docusign,
  frog,
  vmware,
  person1,
  person2,
  person3,
} from "../../assets";

export function Reviews() {
  return (
    <SectionImage className="mb-28 flex-col items-center ">
      <H1>Loved by the world's best teams</H1>
      <Button color="border border-blue-500 text-blue-500" size="w-64">
        See all customer stories
      </Button>
      <div className="mt-12 grid grid-cols-3  gap-x-28 lg:grid-cols-1 lg:gap-y-4">
        <div className="flex flex-col lg:w-96 ">
          <Image src={vmware} />
          <P className="mt-8">
            "When pandemic hit, those of us who thrive on in-person
            collaborattion were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaborattion, whiteboarding and retrospectives while remote"
          </P>
          <div className="mt-3 flex items-center gap-x-2">
            <Image src={person1} />
            <div>
              <P className="text-xs">Rosanne Mustafa</P>
              <P className="text-xs">Design Team Lead at VMware</P>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-96">
          <Image src={docusign} />
          <P className="mt-8">
            "When pandemic hit, those of us who thrive on in-person
            collaborattion were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaborattion, whiteboarding and retrospectives while remote"
          </P>
          <div className="mt-3 flex items-center gap-x-2">
            <Image src={person2} />
            <div>
              <P className="text-xs">Rosanne Mustafa</P>
              <P className="text-xs">Design Team Lead at VMware</P>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-96">
          <Image src={frog} />
          <P className="mt-8">
            "When pandemic hit, those of us who thrive on in-person
            collaborattion were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaborattion, whiteboarding and retrospectives while remote"
          </P>
          <div className="mt-3 flex items-center gap-x-2">
            <Image src={person3} />
            <div>
              <P className="text-xs">Rosanne Mustafa</P>
              <P className="text-xs">Design Team Lead at VMware</P>
            </div>
          </div>
        </div>
      </div>
    </SectionImage>
  );
}
