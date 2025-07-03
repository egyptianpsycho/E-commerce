import { forwardRef } from "react";
import type { Session } from "../../CONSTANTS";
import { Clock, Plus, ShoppingCart, Star } from "lucide-react";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/Store";
import { addToCart, removeFromCart } from "../../Store/cartSlice";
type CardProps = Session;
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      description,
      duration,
      id,
      level,
      price,
      originalPrice,
      mentor,
      rating,
      image,
    },
    ref
  ) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);
    const isInCart = cart.some((item) => item.id === id);
    const handleClick = () => {
      if (isInCart) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(
          addToCart({
            title,
            id,
            price,
            originalPrice,
            mentor,
            image,
          })
        );
      }
    };
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

    const getDiscountPercentage = (originalPrice: number, price: number) => {
      return Math.round(((originalPrice - price) / originalPrice) * 100);
    };
    const DiscountPercentage: number =
    originalPrice && price
      ? getDiscountPercentage(originalPrice,price)
      : 0;
    return (
      <div
        ref={ref}
        className=" rounded-lg will-change-[transform,opacity]  group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden "
      >
        <div className="p-0">
          <div
            className={`h-40 sm:h-48 md:h-56  flex items-center justify-center relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <img
              src={image}
              alt="imgForCard"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 right-4">
              <div
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75  border ${getLevelColor(
                  level
                )}`}
              >
                {level}
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-300">{rating}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{duration}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-500">
              {title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">by {mentor.name}</span>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">${price}</span>
                {originalPrice > price && (
                  <span className="text-sm text-gray-400 line-through">
                    ${originalPrice}
                  </span>
                )}
              </div>{" "}
            </div>
            {DiscountPercentage > 0 && (
              <div className="mb-4 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-300 text-sm text-center">
                  💰 Save ${originalPrice - price} with this
                  offer!
                </p>
              </div>
            )}
            <div className="flex gap-2 ">
              <Button
                to={`/sessions/details/${id}`}
                className="flex-1 justify-center bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500  font-semibold py-2 px-4 h-10 rounded-lg items-center flex justify-self-center border-transparent hover:scale-105"
              >
                Learn More
              </Button>
              <Button
                onClick={() => handleClick()}
                className={`inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer hover:scale-105  ${
                  isInCart
                    ? "bg-pink-500/20 border-pink-500/50 text-pink-300"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isInCart ? (
                  <ShoppingCart className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
