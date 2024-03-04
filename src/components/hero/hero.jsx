import {
  hero,
  fullStar,
  halfStar,
  heroLogo1,
  heroLogo2,
  heroLogo3,
} from "../../assets";

import { SectionImage, Button, Image, H1, Input } from "../utils";

export function Hero() {
  return (
    <SectionImage>
      <div className="flex flex-col">
        <H1 className="text-5xl text-slate-900 font-bold">
          Take ideas from better to best
        </H1>
        <p className="text-lg text-slate-900 opacity-70 mt-4">
          Miro is your teams visual platform to connect, collaborate and create
          -- together
        </p>
        <Input placeholder="Enter your email" />
        <Button color="bg-blue-500">Sing up free</Button>

        <p className="text-sm text-slate-900 opacity-40 mt-3">
          Collaborate with your team within minutes
        </p>
        <div
          className="flex items-center justify-between bg-neutral-100 w-96 rounded-2xl px-5 py-4 mt-7
        "
        >
          <div>
            <div className="flex">
              <Image size={"w-4"} src={fullStar} />
              <Image size={"w-4"} src={fullStar} />
              <Image size={"w-4"} src={fullStar} />
              <Image size={"w-4"} src={fullStar} />
              <Image size={"w-4"} src={halfStar} />
            </div>
            <p className="text-xs mt-1">Based on 5000+ reviews</p>
          </div>
          <div className="flex gap-x-3">
            <Image size={"w-6"} src={heroLogo1} />
            <Image size={"w-13"} src={heroLogo2} />
            <Image size={"w-13"} src={heroLogo3} />
          </div>
        </div>
      </div>
      <Image size="w-full max-w-2xl" src={hero} alt="" />
    </SectionImage>
  );
}
