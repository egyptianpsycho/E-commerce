import { ArrowRight, Sparkles } from "lucide-react";
import  { useEffect,useRef } from "react";
import Button from "../UI/Button";
import gsap from "gsap";
const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(heroRef.current?.children || []),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.3, ease: "power3.out" }
      )
    })
    return () => ctx.revert()
  },[])
  return (
    <section ref={heroRef} className="relative z-10 px-6 py-20 text-center">
      <div className="opacity-0 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-8">
          <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
          <span className="text-purple-300 text-sm font-medium">
            Empowering React Developers
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent ">
          Our Mission: Your Success
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join a thriving community of React developers dedicated to growth,
          learning, and mutual success.
        </p>
        <Button
        to={"/sessions"}
          className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-lg font-semibold py-2 px-8 rounded-lg items-center flex justify-self-center" 
        >
          Get Started Today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
