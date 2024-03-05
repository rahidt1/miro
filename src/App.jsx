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
        `mx-auto my-0 box-border flex w-full max-w-[1440px] flex-col font-customFont`,
      )}
    >
      <Header />
      {/* <Hero /> */}
      {/* <Trusted /> */}
      {/* <Feature /> */}
      {/* <Work /> */}
      {/* <Connect /> */}
      {/* <Way /> */}
      <BuildWork />
      {/* <BuildTeam /> */}
      {/* <Reviews /> */}
      {/* <Footer />  */}
    </div>
  );
}

export default App;
