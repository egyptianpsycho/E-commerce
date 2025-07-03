import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
export interface CartItem  {
  id:string;
  title:string;
  price: number;
  originalPrice: number;
  mentor: {
    name: string;
    avatar: string;
    title: string;
    experience: string;
    rating: number;
    students: number;
    bio: string;
  };
  image:string;
  quantity:number
}

type CartType = Omit<CartItem, 'quantity'>
interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 });         
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload); 
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;

