import { H1, H2, P, Image, Button, SectionImage, Highlighter } from "../utils";
import { feature } from "../../assets";
import { FEATURETEXT } from "../../data";

export function Feature() {
  return (
    <SectionImage className="flex-col items-center relative">
      <Image
        className="absolute right-1/4 top-[-100px]"
        src={feature}
        size="w-52 h-52"
      />
      <H1 className="text-center mt-12">
        Collaborate without <span className="block">constraints</span>
      </H1>
      <div className="flex justify-evenly gap-x-20 mt-16">
        {FEATURETEXT.map((item) => (
          <div key={item.title}>
            <H2>{item.title}</H2>
            <P>
              <Highlighter highlight={item.keypoint}>
                {item.description}
              </Highlighter>
            </P>
          </div>
        ))}
      </div>
      <Button color="bg-blue-500" size="w-44">
        Sign up free
      </Button>
    </SectionImage>
  );
}
