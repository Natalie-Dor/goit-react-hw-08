import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./operations";
//  refreshUser,
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // ? state.error = action.payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // ?
      })
      // logout pending and rejected???
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      }),
  // .addCase(refreshUser.pending, state => {
  //   state.isRefreshing = true;
  // })
  // .addCase(refreshUser.fulfilled, (state, action) => {
  //   state.user = action.payload;
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // })
  // .addCase(refreshUser.rejected, state => {
  //   state.isRefreshing = false;
  // }),
});

export default authSlice.reducer;
