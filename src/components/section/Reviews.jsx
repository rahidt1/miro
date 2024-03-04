import { SectionImage, H1, Button, Image, P } from "../utils";
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
    <SectionImage className="flex-col items-center mb-28">
      <H1>Loved by the world's best teams</H1>
      <Button color="border border-blue-500 text-blue-500" size="w-64">
        See all customer stories
      </Button>
      <div className="flex gap-x-28 mt-12">
        <div className="flex flex-col">
          <Image src={vmware} />
          <P className="mt-8">
            "When pandemic hit, those of us who thrive on in-person
            collaborattion were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaborattion, whiteboarding and retrospectives while remote"
          </P>
          <div className="flex items-center gap-x-2 mt-3">
            <Image src={person1} />
            <div>
              <P className="text-xs">Rosanne Mustafa</P>
              <P className="text-xs">Design Team Lead at VMware</P>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={docusign} />
          <P className="mt-8">
            "When pandemic hit, those of us who thrive on in-person
            collaborattion were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaborattion, whiteboarding and retrospectives while remote"
          </P>
          <div className="flex items-center gap-x-2 mt-3">
            <Image src={person2} />
            <div>
              <P className="text-xs">Rosanne Mustafa</P>
              <P className="text-xs">Design Team Lead at VMware</P>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={frog} />
          <P className="mt-8">
            "When pandemic hit, those of us who thrive on in-person
            collaborattion were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaborattion, whiteboarding and retrospectives while remote"
          </P>
          <div className="flex items-center gap-x-2 mt-3">
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
