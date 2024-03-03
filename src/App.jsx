import "./App.css";
import { Header, Hero, Trusted, Feature, Section, Footer } from "./components";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Trusted />
      <Feature />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
