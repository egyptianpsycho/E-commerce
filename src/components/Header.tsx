import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Share2,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { type RootState } from "../Store/Store";
import Button from "./UI/Button.tsx";
import gsap from "gsap";
import { useSelector } from "react-redux";
import Cart from "./Sessions/Cart.tsx";

type HeaderProps = {
  page: "mission" | "session" | "DetailsPage";
};

const Header = ({ page }: HeaderProps) => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const headerRef = useRef<HTMLElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked((prev) => !prev);
  };
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cartRef.current && showCart) {
        gsap.fromTo(
          cartRef.current,
          { x:100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" },
        )
      }
    }
    
  );
    return () => {
      ctx.revert();
    };
  }, [showCart ]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="relative z-10 sm:px-6 sm:py-4 px-4 py-3 backdrop-blur-sm bg-white/5 border-b border-white/10  "
      >
        {" "}
        {page === "DetailsPage" ? (
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Button
              to="/sessions"
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Back to Sessions</span>
            </Button>
            <div className="flex items-center space-x-4">
              <Button className="inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer ">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                className="inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20  hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer "
                onClick={handleLike}
              >
                <Heart
                  className={`w-4 h-4 mr-2  ${
                    liked
                      ? "fill-rose-600 duration-500 "
                      : "text-white duration-200"
                  } `}
                />
                <span className="text-white">Save</span>
              </Button>
              <div className="flex items-center space-x-4 flex-wrap">
                <Button
                  onClick={toggleCart}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart ({cart.length})
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 rounded-full text-xs flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>{" "}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto flex items-center justify-between container">
            <div className="flex items-center space-x-2">
              <Button to={"/mission"}>
                <ArrowLeft className="w-5 h-5 text-gray-400" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ReactMentoring
              </h1>
            </div>
            {page == "mission" ? (
              <nav className="hidden md:flex items-center space-x-8">
                <Button
                  to="/mission"
                  className="text-gray-300 hover:text-white transition-colors duration-500 hover:scale-105 transform"
                >
                  Our Mission
                </Button>
                <Button
                  to="/sessions"
                  className="text-gray-300 hover:text-white transition-colors duration-500 hover:scale-105 transform"
                >
                  Browse Sessions
                </Button>
                <Button
                  to="/sessions"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 flex justify-center items-center py-2 px-4 rounded-md cursor-pointer "
                >
                  Upcoming Sessions
                  <ArrowRight className="ml-2 w-4 h-4 " />
                </Button>
              </nav>
            ) : page == "session" ? (
              <div className="flex items-center space-x-4">
                <Button
                  onClick={toggleCart}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-9 sm:h-10 sm:px-4 sm:py-2 px-2 py-1 relative border-white/20 text-white hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 mr-1 sm:mr-2" />
                  Cart ({cart.length})
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 rounded-full text-xs flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>{" "}
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </header>
      <Cart toggleCart={toggleCart} showCart={showCart} ref={cartRef} />
    </>
  );
};

export default Header;
