import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state,action) => {
      //reducer fn can take two parameters:"state" and "action".
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      //removes the last item.
      state.items.pop();
    },
    clearCart: (state) => {
      //resets the cart to 0 again.We cant do 'state.items = []',theres a reason behind it.
      state.items = [];
      // return { items: [] };
    }
  }
});
//We export reducer and the actions.Below is the syntax to export it.
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

