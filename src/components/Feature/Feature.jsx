import { H1, H2, P, Image, Button, SectionImage, Highlighter } from "../utils";
import { feature } from "../../assets";
import { FEATURETEXT } from "../../data";

export function Feature() {
  return (
    <SectionImage className="relative flex-col items-center">
      <Image
        className="absolute right-1/4 top-[-100px]"
        src={feature}
        size="w-52 h-52"
      />
      <H1 className="mt-12 text-center">
        Collaborate without <span className="block">constraints</span>
      </H1>
      <div className="mt-16 flex justify-evenly gap-x-20 lg:flex-col ">
        {FEATURETEXT.map((item) => (
          <div key={item.title}>
            <H2 className="text-center">{item.title}</H2>
            <P>
              <Highlighter className="lg:text-center" highlight={item.keypoint}>
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
