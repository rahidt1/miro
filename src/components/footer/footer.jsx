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
    <footer className="bg-slate-900 max-w-[1440px]">
      <SectionImage>
        <div className="flex gap-x-12 items-start mt-24">
          <div>
            <H2 className="text-white text-2xl mb-8">Scan.Detect.Remove.</H2>
            <div className="flex gap-x-8">
              <Image size="w-8" src={footerLogo1} />
              <Image size="w-8" src={footerLogo2} />
              <Image size="w-8" src={footerLogo3} />
            </div>
            <div className="flex gap-x-8 mt-12">
              <P className="text-white text-xs underline decoration-1 decoration-white">
                Privacy Policy
              </P>
              <P className="text-white text-xs underline decoration-1 decoration-white">
                Terms of Service
              </P>
            </div>
            <P className="text-white text-xs mt-12">
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </P>
            <P className="text-white text-xs mt-12">
              Designed and Developed by{" "}
              <span className="underline decoration-1 decoration-white">
                Bigger Picture
              </span>
            </P>
          </div>
          <div>
            <H1 className="text-white">Miro.</H1>
            <BorderBottom color="border-white" size="w-36" className="mt-4" />

            <H2 className="text-amber-300 mt-16">iPhone</H2>
            <H2 className="text-amber-300 mt-4">Android</H2>
            <H2 className="text-amber-300 mt-4">Help</H2>
            <H2 className="text-amber-300 mt-4">About</H2>
            <H2 className="text-amber-300 mt-4">Insights</H2>
          </div>
          {/* <Image size="w-full max-w-md" src={footerForm} /> */}
          {/* <form
            action="#"
            className="bg-[url('/src/assets/footer/form.svg')] bg-auto"
          >
            <H2>Sing up to our newsletter</H2>
          </form> */}
          <div className="bg-[url('/src/assets/footer/form.svg')] bg-contain bg-no-repeat w-[430px] h-[230px] relative">
            <form
              action="#"
              className="absolute right-0 max-w-96 text-start mt-8"
            >
              <H2 className="mb-2">Sing up to our newsletter</H2>
              <P>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, non.
              </P>
              <div className="flex mt-4 ">
                <Input
                  className="w-64 rounded-r-none text-sm mt-0"
                  placeholder="Email address "
                />
                <Button
                  className="rounded-l-none text-sm mt-0"
                  color="bg-slate-900"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </SectionImage>
    </footer>
  );
}
