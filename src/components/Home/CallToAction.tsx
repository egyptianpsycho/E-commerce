import Button from "../UI/Button";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
const CallToAction = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ctoRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
         gsap.fromTo(
            ctoRef.current,
            { y:40,  opacity: 0, scale: 0.8 },
            {
                y:0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ctoRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
    );

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctoRef} className="relative z-10 px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Level Up Your React Skills?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who have accelerated their careers with
            our mentoring platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/sessions"
              className="inline-flex items-center justify-center  font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Browse Sessions
            </Button>
            <Button
              className="inline-flex items-center justify-center  font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 bg-transparent cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
