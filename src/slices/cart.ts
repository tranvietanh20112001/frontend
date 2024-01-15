import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductData {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ICartItem {
  product: IProductData;
  quantity: number;
}

interface ICart {
  cart: ICartItem[];
}

const initialState: ICart = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice;
