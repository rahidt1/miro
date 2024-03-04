import "./App.css";
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
    <div className="flex flex-col">
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
