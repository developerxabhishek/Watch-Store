import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userId",
  initialState: {
    value: "",
  },
  reducers: {
    setUserId: (state, {payload}) => {
      state.value = payload;
    },
  },
});
export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
