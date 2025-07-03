import Header from "../Header";
import Cards from "./Cards";
import Hero from "./Hero";
import {  useMemo, useState } from "react";
import { SESSIONS } from "../../CONSTANTS";
interface Filters {
  level: "All" | "Beginner" | "Intermediate" | "Advanced";
  priceRange: [number, number];
  minRating: number;
}
const Sessions = () => {
  const [minPrice, maxPrice] = useMemo(() => {
    const prices = SESSIONS.map((s) => s.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, []);
  
  const [minRating, maxRating] = useMemo(() => {
    const ratings = SESSIONS.map((s) => s.rating);
    return [Math.min(...ratings), Math.max(...ratings)];
  }, []);
  const [filters, setFilters] = useState<Filters>({
    level: "All",
    priceRange: [minPrice, maxPrice],
    minRating: minRating,
  });
  const applyFilters = (
    level: "All" | "Beginner" | "Intermediate" | "Advanced",
    priceRange: [number, number],
    minRating: number
  ) => {
    setFilters({
      level,
      priceRange,
      minRating,
    });
  };
  const filt = (level: "All" | "Beginner" | "Intermediate" | "Advanced") => {
    setFilters((prev) => ({
      ...prev,
      level,
    }));
  };

  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const resetFilters = () => {
    setFilters({
      level: "All",
      priceRange: [minPrice, maxPrice],
      minRating: 0,
    });
    setSearchQuery("");
  };

  const filteredSessions = SESSIONS.filter((session) => {
    const levelMatch =
      filters.level === "All" || session.level === filters.level;
    const priceMatch =
      session.price >= filters.priceRange[0] &&
      session.price <= filters.priceRange[1];
    const ratingMatch = session.rating >= filters.minRating;
    const searchMatch =
      searchQuery === "" ||
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.mentor.name.toLowerCase().includes(searchQuery.toLowerCase());

    return levelMatch && priceMatch && ratingMatch && searchMatch;
  });
  const lengths:[number,number,number,number] = [
    filteredSessions.length,
    SESSIONS.filter((s) => s.level === "Beginner").length,
    SESSIONS.filter((s) => s.level === "Intermediate").length,
    SESSIONS.filter((s) => s.level === "Advanced").length,
  ];

  
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header page="session" />
        <div className="container mx-auto px-4">
          <Hero
            filt={filt}
            filters={filters}
            minPrice={minPrice}
            maxPrice={maxPrice}
            minRating={minRating}
            searchQuery={searchQuery}
            toggleFilters={toggleFilters}
            resetFilters={resetFilters}
            showFilters={showFilters}
            applyFilters={applyFilters}
            maxRating={maxRating}
            lengths={lengths}
            setSearchQuery={setSearchQuery}
          />
          <Cards selectedSessions={filteredSessions} resetFilters={resetFilters} searchQuery={searchQuery} />
        </div>
      </div>
    </main>
  );
};

export default Sessions;
