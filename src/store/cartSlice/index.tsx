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
    addToCart: (state: CartState, action: PayloadAction<ProductType>) => {
      state.items = state.items
        ? [...state.items, { item: action.payload, count: 1 }]
        : [{ item: action.payload, count: 1 }];
    },
    changeCount: (
      state: CartState,
      action: PayloadAction<{ item: ProductType; count: number }>
    ) => {
      if (action.payload.count === 0) {
        removeFromCart(action.payload.item);
      } else if (action.payload.count > 0) {
        if (
          state.items.find((item) => item.item.id === action.payload.item.id)
        ) {
          state.items = state.items.map((item) => {
            if (item.item.id === action.payload.item.id) {
              item.count = action.payload.count;
            }

            return item;
          });
        }
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

export const { addToCart, changeCount, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
