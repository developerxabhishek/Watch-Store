import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishlist: [],
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addtowishlist: (state, action) => {
      var myitem = state.wishlist.filter((key) => key.id === action.payload.id);
      if (myitem.length >= 1) {
        alert("This product is already in the wishlist");
      } else {
        state.wishlist.push(action.payload);
      }
    },
    removewishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const { addtowishlist, removewishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;

