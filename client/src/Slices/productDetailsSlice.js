import { createSlice } from "@reduxjs/toolkit";
const ProductDetailsSlice = createSlice({
  name: "Product Details",
  initialState: {
    value: {},
  },
  reducers: {
    setProductDetails: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const { setProductDetails } = ProductDetailsSlice.actions;
export default ProductDetailsSlice.reducer;
