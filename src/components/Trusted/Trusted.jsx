// import { cisco, deloitte, okta, volvo, walmart } from "../../assets";
import { TRUSTED } from "../../data";
import { Image } from "../utils";

export function Trusted() {
  return (
    <section className="mx-auto my-14 flex w-full max-w-6xl flex-col gap-y-12">
      <p className="text-center text-lg text-slate-900 opacity-60">
        Trusted by 45M+ users
      </p>
      <div className="flex justify-evenly lg:flex-col lg:items-center">
        {TRUSTED.map((item) => (
          <Image key={item.name} src={item.image} />
        ))}
      </div>
    </section>
  );
}
