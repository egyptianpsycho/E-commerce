import Hero from "./Hero";
import Features from "./Features";
import CallToAction from "./CallToAction";
import Header from "../Header";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header page="mission" />
      <div className="container mx-auto px-4">
        <Hero />
        <Features />
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;
