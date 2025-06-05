import { createSlice } from "@reduxjs/toolkit";

const storedAuth = localStorage.getItem("auth");
const initialState = storedAuth
  ? JSON.parse(storedAuth)
  : {
      user: "",
      role: "",
      isAuthenticated: false,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      state.user = user.email;
      state.role = "ROLE_ADMIN";
      state.isAuthenticated = true;
      localStorage.setItem('auth', JSON.stringify({user: user.email, role: "ROLE_ADMIN", isAuthenticated: true}))
    },
    logout: (state) => {
      state.user = "";
      state.role = "";
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
