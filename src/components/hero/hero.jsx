import "./hero.css";
import {
  hero,
  fullStar,
  halfStar,
  heroLogo1,
  heroLogo2,
  heroLogo3,
} from "../../assets";

export function Hero() {
  return (
    <section className="w-full max-w-6xl mx-auto my-10 flex flex-row gap-x-14">
      <div className="flex flex-col content-evenly">
        <h1 className="text-5xl text-slate-900 font-bold">
          Take ideas from better to best
        </h1>
        <p className=" text-lg text-slate-900 opacity-70 font-normal mt-4">
          Miro is your teams visual platform to connect, collaborate and create
          -- together
        </p>
        <input
          className="border border-stone-500 rounded-3xl pl-5 pt-3 pb-3 mt-8 w-100"
          type="text"
          placeholder="Enter your email"
        />
        <a
          href="#"
          className="bg-blue-500 p-3 rounded-3xl text-white text-center mt-5 w-100"
        >
          Sign up free
        </a>
        <p className="text-sm text-slate-900 opacity-40 mt-3">
          Collaborate with your team within minutes
        </p>
        <div
          className="flex items-center justify-between bg-neutral-100 w-96 rounded-2xl px-5 py-4 mt-7
        "
        >
          <div>
            <div className="flex">
              <img className="w-4" src={fullStar} alt="" />
              <img className="w-4" src={fullStar} alt="" />
              <img className="w-4" src={fullStar} alt="" />
              <img className="w-4" src={fullStar} alt="" />
              <img className="w-4" src={halfStar} alt="" />
            </div>
            <p className="text-xs mt-1">Based on 5000+ reviews</p>
          </div>
          <div className="flex gap-x-3">
            <img className="w-6" src={heroLogo1} alt="" />
            <img className="w-13" src={heroLogo2} alt="" />
            <img className="w-13" src={heroLogo3} alt="" />
          </div>
        </div>
      </div>
      <img className="w-full max-w-2xl" src={hero} alt="" />
    </section>
  );
}
