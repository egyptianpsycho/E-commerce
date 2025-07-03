import { DollarSign, Filter, RotateCcw, Star, Users, X } from "lucide-react";
import Button from "../UI/Button";
import { Slider } from "../UI/Slider";
import { forwardRef } from "react";
type FiltersProps = {
  filters: {
    level: "All" | "Beginner" | "Intermediate" | "Advanced";
    priceRange: [number, number];
    minRating: number;
  };
  toggleFilters: () => void;
  resetFilters: () => void;
  applyFilters: (
    level: "All" | "Beginner" | "Intermediate" | "Advanced",
    priceRange: [number, number],
    minRating: number
  ) => void;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  maxRating: number;
  lengths: [number, number, number, number];
};
const Filters = forwardRef<HTMLDivElement, FiltersProps>(
  (
    {
      filters,
      toggleFilters,
      resetFilters,
      applyFilters,
      minPrice,
      maxPrice,
      minRating,
      lengths,
      maxRating,
    },
    ref
  ) => {
    const getLevelColor = (level: string) => {
      switch (level) {
        case "Beginner":
          return "bg-green-500/20 text-green-300 border-green-500/30";
        case "Intermediate":
          return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
        case "Advanced":
          return "bg-red-500/20 text-red-300 border-red-500/30";
        default:
          return "bg-gray-500/20 text-gray-300 border-gray-500/30";
      }
    };
    const classing = (
      val: "All" | "Beginner" | "Intermediate" | "Advanced" | number
    ) =>
      val == filters.level || val == filters.minRating
        ? "bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500  font-semibold py-2 px-4 h-10 rounded-lg items-center flex justify-self-center border-transparent "
        : "inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer ";
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-xs"
          onClick={() => toggleFilters()}
        ></div>
        <div
          ref={ref}
          className="absolute left-0 top-0 h-full w-full max-w-sm bg-slate-900/95 backdrop-blur-sm border-r border-white/10 shadow-2xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white flex items-center font">
                <Filter className="w-6 h-6 mr-2 text-purple-400" />
                Filters
              </h2>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-white/80 transition-all duration-500 bg-transparent cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
                <Button
                  onClick={() => toggleFilters()}
                  className="inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-white/80 transition-all duration-500 bg-transparent cursor-pointer"
                >
                  <X className="w-5 h-5 cursor-pointer" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-400" />
                  Difficulty Level
                </h3>
                <div className="space-y-3 ">
                  {(
                    ["All", "Beginner", "Intermediate", "Advanced"] as const
                  ).map((level, index) => (
                    <Button
                      key={level}
                      onClick={() =>
                        applyFilters(
                          level,
                          filters.priceRange,
                          filters.minRating
                        )
                      }
                      className={`${classing(level)} w-full `}
                    >
                      <div className="w-full flex items-center justify-between">
                        <span>{level}</span>
                        {level !== "All" && (
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75 ${getLevelColor(
                              level
                            )}`}
                          >
                            {lengths[index]}
                          </div>
                        )}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-purple-400" />
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="px-3">
                    <Slider
                      value={filters.priceRange}
                      onValueChange={(value) =>
                        applyFilters(
                          filters.level,
                          value as [number, number],
                          filters.minRating
                        )
                      }
                      max={maxPrice}
                      min={minPrice}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                      <span className="text-gray-300">Min: </span>
                      <span className="text-white font-semibold">
                        ${filters.priceRange[0]}
                      </span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                      <span className="text-gray-300">Max: </span>
                      <span className="text-white font-semibold">
                        ${filters.priceRange[1]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-purple-400" />
                  Minimum Rating
                </h3>
                <div className="space-y-4">
                  <div className="px-3">
                    <Slider
                      value={[filters.minRating]}
                      onValueChange={(value) =>
                        applyFilters(
                          filters.level,
                          filters.priceRange,
                          value[0]
                        )
                      }
                      max={maxRating}
                      min={minRating}
                      step={0.1}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">
                        {filters.minRating.toFixed(1)}+
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[4.0, 4.2, 4.4, 4.6, 4.8].map((rating) => (
                      <Button
                        key={rating}
                        onClick={() =>
                          applyFilters(
                            filters.level,
                            filters.priceRange,
                            (filters.minRating = rating)
                          )
                        }
                        className={`${classing(rating)}`}
                      >
                        {rating}+
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {lengths[0]}
                  </div>
                  <div className="text-sm text-gray-300">
                    {lengths[0] === 1 ? "Session Found" : "Sessions Found"}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 p-6">
              <Button
                onClick={() => toggleFilters()}
                className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500  font-semibold py-2 px-4 h-10 rounded-lg items-center flex justify-self-center border-transparent"
              >
                Show {lengths[0]} Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Filters;
