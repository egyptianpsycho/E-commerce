import { useEffect, useRef } from "react";
import Card from "./Card";
import { Award, CheckCircle, Users } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (card) {
          return gsap.fromTo(
            card,
            { y: 100, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.3,
              delay: i * 0.09,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
            title="What we do"
            description="ReactMentoring is a platform for React developers to find mentors who can help them with their React-related questions and problems. We are a community of React developers who want to help each other succeed."
            Icon={Users}
            gradientIcon="from-blue-500 to-purple-500"
            textColorHover="group-hover:text-purple-300"
            shadow="hover:shadow-purple-500/20"
          />
          <Card
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
            title="What we offer"
            description="We offer a variety of mentoring sessions, from one-on-one mentoring to group mentoring sessions.
            Browse our available sessions to find the one that best fits your needs."
            Icon={CheckCircle}
            gradientIcon="from-purple-500 to-pink-500"
            textColorHover="group-hover:text-pink-300"
            shadow="hover:shadow-pink-500/20"
          />
          <Card
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
            title="What you get"
            description="No matter if you are a beginner or an experienced React developer, we are here to help you level up
            your React skills."
            Icon={Award}
            gradientIcon="from-pink-500 to-blue-500"
            textColorHover="group-hover:text-blue-300"
            shadow="hover:shadow-blue-500/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
