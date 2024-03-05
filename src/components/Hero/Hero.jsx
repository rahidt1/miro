import {
  hero,
  fullStar,
  halfStar,
  heroLogo1,
  heroLogo2,
  heroLogo3,
} from "../../assets";

import { SectionImage, Button, Image, H1, Input } from "../Utils";

export function Hero() {
  return (
    <SectionImage>
      <div className="flex max-w-96 flex-col lg:max-w-lg ">
        <H1 className="text-5xl font-bold text-slate-900 lg:text-center">
          Take ideas from better to best
        </H1>
        <p className="mt-4 text-lg text-slate-900 opacity-70 lg:text-center">
          Miro is your teams visual platform to connect, collaborate and create
          -- together
        </p>
        <Input placeholder="Enter your email" />
        <Button color="bg-blue-500">Sing up free</Button>

        <p className="mt-3 text-sm text-slate-900 opacity-40">
          Collaborate with your team within minutes
        </p>
        <div
          className="mt-7 flex items-center justify-between rounded-2xl bg-neutral-100 px-5 py-4 lg:justify-evenly 
        "
        >
          <div className="">
            <div className="flex">
              <Image size={"w-4"} src={fullStar} />
              <Image size={"w-4"} src={fullStar} />
              <Image size={"w-4"} src={fullStar} />
              <Image size={"w-4"} src={fullStar} />
              <Image size={"w-4"} src={halfStar} />
            </div>
            <p className="mt-1 text-xs">Based on 5000+ reviews</p>
          </div>
          <div className="flex gap-x-3">
            <Image size={"w-6"} src={heroLogo1} />
            <Image size={"w-13"} src={heroLogo2} />
            <Image size={"w-13"} src={heroLogo3} />
          </div>
        </div>
      </div>
      <Image size="w-full h-auto max-w-2xl col-span-2" src={hero} alt="" />
    </SectionImage>
  );
}
