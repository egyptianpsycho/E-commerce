import { useEffect, useRef } from "react";
import Button from "../UI/Button";
import gsap from "gsap";
import { Filter, Search, X } from "lucide-react";
import Filters from "./Filters";
type HeroProps = {
  filt: (level: "All" | "Beginner" | "Intermediate" | "Advanced") => void;
  filters: {
    level: "All" | "Beginner" | "Intermediate" | "Advanced";
    priceRange: [number, number];
    minRating: number;
  };
  minPrice: number;
  maxPrice: number;
  minRating: number;
  maxRating:number;
  searchQuery: string;
  toggleFilters: () => void;
  resetFilters: () => void;
  showFilters: boolean;
  applyFilters: (
    level: "All" | "Beginner" | "Intermediate" | "Advanced",
    priceRange: [number, number],
    minRating: number,
  ) => void;
  lengths:[number,number,number,number];
  setSearchQuery: (query: string) => void;
};
const Hero = ({
  filt,
  filters,
  minPrice,
  maxPrice,
  minRating,
  maxRating,
  searchQuery,
  toggleFilters,
  resetFilters,
  showFilters,
  applyFilters,
  lengths,
  setSearchQuery,
}: HeroProps) => {
  const getActiveFiltersCount = () => {
    let count = 0;

    if (filters.level !== "All") count++;
    if (
      filters.priceRange[0] !== minPrice ||
      filters.priceRange[1] !== maxPrice
    )
      count++;
    if (filters.minRating !== minRating) count++;

    return count;
  };
  const titleRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (filtersRef.current && showFilters) {
        gsap.fromTo(
          filtersRef.current,
          { x:-100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" },
        )
      }
    }
    
  );
    return () => {
      ctx.revert();
    };
  }, [showFilters ]);
  useEffect(() => {
    const ct = gsap.context(() => {
      gsap.fromTo(
        Array.from(titleRef.current?.children || []),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    })
    return () => ct.revert();
  },[])
  const classing = (level: "All" | "Beginner" | "Intermediate" | "Advanced") =>
    level == filters.level
      ? "bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300  font-semibold py-2 px-4 h-10 rounded-lg items-center flex justify-self-center border-transparent"
      : "inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer ";
  return (
    <section className=" relative z-10 px-6 py-12 text-center">
      <div ref={titleRef} className="max-w-7xl mx-auto">
        <h2 className="opacity-0 text-2xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          Available mentoring sessions
        </h2>
        <p className="opacity-0 text-base sm:text-lg md:text-xl max-w-3xl text-gray-300 mb-8 mx-auto ">
          From a one-on-one introduction to React's basics all the way up to a
          deep dive
          <br /> into state mechanics - we got just the right session for you!
        </p>
        <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-1 group-hover:border-white/30 transition-all duration-300">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 text-purple-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search sessions, mentors, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-400 border-0 outline-none text-sm
                     sm:text-lg px-2 py-2 sm:py-3"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="flex items-center justify-center w-12 h-12 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                    >
                      <X className="w-5 h-5 cursor-pointer" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            {searchQuery && (
              <div className="mt-3 text-center">
                <span className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  <Search className="w-3 h-3 mr-1" />
                  Searching for "{searchQuery}"
                </span>
              </div>
            )}
          </div>
        <div className="opacity-0 flex gap-4 justify-center mb-8 flex-wrap sm:px-3 sm:py-2 sm:text-sm">
          <Button className={`${classing("All")}`} onClick={() => filt("All")}>
            All
          </Button>
          <Button
            className={`${classing("Beginner")}`}
            onClick={() => filt("Beginner")}
          >
            Beginner
          </Button>
          <Button
            className={`${classing("Intermediate")}`}
            onClick={() => filt("Intermediate")}
          >
            Intermediate
          </Button>
          <Button
            className={`${classing("Advanced")}`}
            onClick={() => filt("Advanced")}
          >
            Advanced
          </Button>
          <div className="flex items-center">
            <div className="h-6 w-px bg-white/20" />
          </div>
          <Button
            className="inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer"
            onClick={() => toggleFilters()}
          >
            <Filter className="w-4 h-4 mr-2" />
            More Filters
            {getActiveFiltersCount() > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-purple-500 rounded-full text-xs flex items-center justify-center">
                {getActiveFiltersCount()}
              </span>
            )}
          </Button>
        </div>
      </div>
      {showFilters && <Filters ref={filtersRef} filters={filters} toggleFilters={toggleFilters} resetFilters={resetFilters} applyFilters={applyFilters} minPrice={minPrice} maxPrice={maxPrice} minRating={minRating} maxRating={maxRating} lengths={lengths} />}
      
    </section>
  );
};

export default Hero;
