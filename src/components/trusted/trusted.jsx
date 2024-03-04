// import { cisco, deloitte, okta, volvo, walmart } from "../../assets";
import { TRUSTED } from "../../data";
import { Image } from "../utils";

export function Trusted() {
  return (
    <section className="w-full max-w-6xl mx-auto my-14 flex flex-col gap-y-12">
      <p className="text-lg text-slate-900 text-center opacity-60">
        Trusted by 45M+ users
      </p>
      <div className="flex justify-evenly">
        {TRUSTED.map((item) => (
          <Image key={item.name} src={item.image} />
        ))}
      </div>
    </section>
  );
}
