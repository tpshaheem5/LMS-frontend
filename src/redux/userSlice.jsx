import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";
const getCookies = getCookie("userToken");

export const profile = createAsyncThunk("profile/userprofile", async () => {
  const response = await axios.get(`/user/profile`, {
    headers: { Authorization: `Bearer ${getCookies}` },
  });
  return response.data.user;
});



const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(profile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});
export default userSlice.reducer;
