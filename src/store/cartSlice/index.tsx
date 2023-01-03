import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from 'components/Products/Product';

type CartItem = {
  item: ProductType;
  count: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{ item: ProductType; count: number }>
    ) => {
      if (state.items.find((item) => item.item.id === action.payload.item.id)) {
        state.items = state.items.map((item) => {
          if (item.item.id === action.payload.item.id) {
            item.count++;
          }

          return item;
        });
      } else {
        state.items = state.items
          ? [...state.items, action.payload]
          : [action.payload];
      }
    },
    removeOneItem: (state: CartState, action: PayloadAction<ProductType>) => {
      if (
        state.items.find((item) => item.item.id === action.payload.id)?.count ||
        0 > 1
      ) {
        state.items = state.items.map((item) => {
          if (item.item.id === action.payload.id) {
            item.count--;
          }

          return item;
        });
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<ProductType>) => {
      if (state.items.find((item) => item.item.id === action.payload.id)) {
        state.items = state.items.filter(
          (item) => item.item.id !== action.payload.id
        );
      }
    }
  }
});

export const { addToCart, removeOneItem, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
