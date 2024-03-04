import { twMerge } from "tailwind-merge";

import {
  Header,
  Hero,
  Trusted,
  Feature,
  Work,
  Connect,
  Way,
  BuildWork,
  BuildTeam,
  Reviews,
  Footer,
} from "./components";

function App() {
  return (
    <div
      className={twMerge(
        `flex flex-col box-border font-customFont w-full max-w-[1440px] mx-auto my-0`
      )}
    >
      <Header />
      <Hero />
      <Trusted />
      <Feature />
      <Work />
      <Connect />
      <Way />
      <BuildWork />
      <BuildTeam />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
