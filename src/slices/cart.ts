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
      const newCartItem = action.payload;

      const currentCartItemIndex = state.cart.findIndex(
        (cartItem) =>
          cartItem.product.productId === newCartItem.product.productId
      );

      if (currentCartItemIndex === -1) {
        state.cart.push(newCartItem);
      } else {
        state.cart[currentCartItemIndex].quantity += newCartItem.quantity;
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.product.productId !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice;
