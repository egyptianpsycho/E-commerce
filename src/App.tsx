import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Sessions from "./components/Sessions/Sessions";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./components/Sessions/Details";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
