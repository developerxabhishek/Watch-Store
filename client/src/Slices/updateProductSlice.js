import { createSlice } from "@reduxjs/toolkit";

const updateProductSlice = createSlice({
  name: "updateproduct",
  initialState: {
    value: {},
  },
  reducers: {
    updateProduct: (state, {payload}) => {
      state.value = payload;
    },
  },
});
export const { updateProduct } = updateProductSlice.actions;
export default updateProductSlice.reducer;
