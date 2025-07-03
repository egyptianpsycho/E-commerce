import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/Store";
import {
  increaseQuantity,
  decreaseQuantity,
  //   clearCart,
  removeFromCart,
} from "../../Store/cartSlice";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import Button from "../UI/Button";
import { forwardRef } from "react";
type CartProps = {
  showCart: boolean;
  toggleCart: () => void;
};
const Cart = forwardRef<HTMLDivElement, CartProps>(
  ({ ...props},ref) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);

    const getCartTotal = () => {
      return cart.reduce((total, item) => {
        const session = cart.find((s) => s.id === item.id);
        return total + (session?.price || 0) * item.quantity;
      }, 0);
    };
    return (
      <div>
        {props.showCart && (
          <div className="fixed inset-0 z-50 overflow-y-auto max-w-full">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => props.toggleCart()}
            ></div>
            <div ref={ref} className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-900/95 backdrop-blur-sm border-l border-white/10 shadow-2xl">
              <div className="flex flex-col h-full">
                {/* Cart Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="text-2xl font-bold text-white">
                    Shopping Cart
                  </h2>
                  <Button
                    onClick={() => props.toggleCart()}
                    className="inline-flex items-center justify-center  rounded-md  font-medium   h-9 px-3 opacity-50 py-2 relative  text-white hover:bg-white/10 hover:text-red-500/90 transition-all duration-500 bg-transparent "
                  >
                    <X className="w-5 h-5 cursor-pointer" />
                  </Button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((session) => {
                        if (!session) return null;

                        return (
                          <div
                            key={session.id}
                            className="bg-white/5 backdrop-blur-sm border-white/10"
                          >
                            <div className="p-4">
                              <div className="flex items-start space-x-4">
                                <div
                                  className={`w-16 h-16 bg-gradient-to-r  rounded-lg flex items-center justify-center flex-shrink-0`}
                                >
                                  <img src={session.image} alt="" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-white text-sm mb-1 truncate">
                                    {session.title}
                                  </h3>
                                  <p className="text-gray-400 text-xs mb-2">
                                    by {session.mentor.name}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-lg font-bold text-white">
                                        ${session.price}
                                      </span>
                                      {session.originalPrice >
                                        session.price && (
                                        <span className="text-sm text-gray-400 line-through">
                                          ${session.originalPrice}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Button
                                        onClick={() =>
                                          dispatch(decreaseQuantity(session.id))
                                        }
                                        className="w-8 h-8 p-0 border-white/20 text-white hover:bg-white/10"
                                      >
                                        <Minus className="w-3 h-3 cursor-pointer" />
                                      </Button>
                                      <span className="text-white w-8 text-center">
                                        {session.quantity}
                                      </span>
                                      <Button
                                        onClick={() =>
                                          dispatch(increaseQuantity(session.id))
                                        }
                                        className="w-8 h-8 p-0 border-white/20 text-white hover:bg-white/10"
                                      >
                                        <Plus className="w-3 h-3 cursor-pointer" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  onClick={() =>
                                    dispatch(removeFromCart(session.id))
                                  }
                                  className="text-gray-400 hover:text-red-400 p-1"
                                >
                                  <X className="w-4 h-4 cursor-pointer" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Cart Footer */}
                {cart.length > 0 && (
                  <div className="border-t border-white/10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-white">
                        Total:
                      </span>
                      <span className="text-2xl font-bold text-white">
                        ${getCartTotal()}
                      </span>
                    </div>
                    <Button className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500  font-semibold py-2 px-4 h-10 rounded-lg items-center flex justify-self-center border-transparent w-full justify-center">
                      Proceed to Checkout
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default Cart;
