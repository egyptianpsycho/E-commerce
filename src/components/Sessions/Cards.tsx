import { useLayoutEffect, useRef } from "react";
import { type Session } from "../../CONSTANTS";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../UI/Button";
import { Filter, Search } from "lucide-react";
type CardsProps = {
  selectedSessions: Session[];
  searchQuery: string;
  resetFilters: () => void;
};

gsap.registerPlugin(ScrollTrigger);
const Cards = ({ selectedSessions, searchQuery, resetFilters }: CardsProps) => {
  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    cardsRef.current.forEach((el) => el && gsap.killTweensOf(el));

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, [selectedSessions]);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  return (
    <section className="relative z-0 px-6 pb-20">
      <div className="max-w-7l mx-auto">
        {selectedSessions.length == 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              {searchQuery ? (
                <Search className="w-12 h-12 text-gray-500" />
              ) : (
                <Filter className="w-12 h-12 text-gray-500" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {searchQuery
                ? `No results for "${searchQuery}"`
                : "No sessions found"}
            </h3>
            <p className="text-gray-400 mb-6">
              {searchQuery
                ? "Try searching with different keywords or adjust your filters."
                : "Try adjusting your filters to see more results."}
            </p>
            <Button
              onClick={resetFilters}
              className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500  font-semibold py-2 px-4 h-10 rounded-lg items-center flex justify-self-center border-transparent"
            >
              {searchQuery ? "Clear Search & Filters" : "Reset Filters"}
            </Button>
          </div>
        ) : (
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedSessions.map((session: Session) => {
              return <Card key={session.id} ref={addToRefs} {...session} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
