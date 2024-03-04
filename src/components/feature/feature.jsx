import { H1, H2, P, Image, Link, Button, SectionImage } from "../utils";
import { feature } from "../../assets";

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
        <div>
          <H2>Free Forever</H2>
          <P>
            Our plan to give you unlimited team member, 3 boards and 300+
            experts-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <Link className="text-blue-500" href="#">
              Pricing plan
            </Link>{" "}
            for more features.
          </P>
        </div>
        <div>
          <H2>Easy Integration</H2>
          <P>
            Miro has 100+ powerful integration with tools you already use like G
            Suit, Slack and Jira. So your workflow is seamless.View the full
            list in our{" "}
            <Link className="text-blue-500" href="#">
              Marketplace
            </Link>
            .
          </P>
        </div>
        <div>
          <H2>Security first</H2>
          <P>
            We treat your data like your would - with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <Link className="text-blue-500" href="#">
              Trust Center
            </Link>
            .
          </P>
        </div>
      </div>
      <Button color="bg-blue-500" size="w-44">
        Sign up free
      </Button>
    </SectionImage>
  );
}
