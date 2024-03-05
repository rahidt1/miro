import {
  SectionImage,
  H1,
  H2,
  Image,
  P,
  BorderBottom,
  Button,
  Input,
} from "../utils";
import { footerLogo1, footerLogo2, footerLogo3 } from "../../assets";

export function Footer() {
  return (
    <footer className="max-w-[1440px] bg-slate-900 px-12">
      <SectionImage className="flex-col">
        <div className="mt-24 flex items-start gap-x-12 lg:mt-0 lg:flex-col lg:items-center lg:gap-y-8 ">
          <div className="items-center lg:flex lg:flex-col">
            <H2 className="mb-8 text-2xl text-white lg:text-center">
              Scan.Detect.Remove.
            </H2>
            <div className="flex gap-x-8 ">
              <Image size="w-8" src={footerLogo1} />
              <Image size="w-8" src={footerLogo2} />
              <Image size="w-8" src={footerLogo3} />
            </div>
            <div className="mt-12 flex gap-x-8">
              <P className="text-xs text-white underline decoration-white decoration-1">
                Privacy Policy
              </P>
              <P className="text-xs text-white underline decoration-white decoration-1">
                Terms of Service
              </P>
            </div>
            <P className="mt-12 text-xs text-white">
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </P>
            <P className="mt-12 text-xs text-white">
              Designed and Developed by{" "}
              <span className="underline decoration-white decoration-1">
                Bigger Picture
              </span>
            </P>
          </div>
          <div>
            <H1 className="text-white lg:text-4xl">Miro.</H1>
            <BorderBottom color="border-white" size="w-36" className="mt-4" />

            <H2 className="mt-16 text-amber-300">iPhone</H2>
            <H2 className="mt-4 text-amber-300">Android</H2>
            <H2 className="mt-4 text-amber-300">Help</H2>
            <H2 className="mt-4 text-amber-300">About</H2>
            <H2 className="mt-4 text-amber-300">Insights</H2>
          </div>
          {/* <Image size="w-full max-w-md" src={footerForm} /> */}
          {/* <form
            action="#"
            className="bg-[url('/src/assets/footer/form.svg')] bg-auto"
          >
            <H2>Sing up to our newsletter</H2>
          </form> */}
          <div className="relative h-[230px] w-[520px] bg-[url('/src/assets/footer/form.svg')] bg-contain bg-no-repeat">
            <form
              action="#"
              className="absolute left-8 mt-8 max-w-96 text-start"
            >
              <H2 className="mb-2">Sing up to our newsletter</H2>
              <P>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, non.
              </P>
              <div className="mt-4 flex ">
                <Input
                  className="mt-0 w-64 rounded-r-none text-sm"
                  placeholder="Email address "
                />
                <Button
                  className="mt-0 rounded-l-none text-sm"
                  color="bg-slate-900"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
        <P className="mt-12 w-full max-w-2xl text-xs text-white opacity-100 lg:mt-0">
          Apple, the Apple logo and iPhone are trademark of Apple Inc.,
          regiestered in the US and other counties. App strore is a service mark
          of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </P>
      </SectionImage>
    </footer>
  );
}
