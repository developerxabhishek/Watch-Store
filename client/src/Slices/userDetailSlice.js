import { createSlice } from "@reduxjs/toolkit";
const userDetailsSlice = createSlice({
  name: "User Details",
  initialState: {
    value: {},
  },
  reducers: {
    setUserDetails: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const { setUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
