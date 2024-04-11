import { createSlice } from "@reduxjs/toolkit";

const ProductPrice = createSlice({
  name: "productPrice",
  initialState: {
    value: 0,
  },
  reducers: {
    setProductPrice: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const { setProductPrice } = ProductPrice.actions;
export default ProductPrice.reducer;
