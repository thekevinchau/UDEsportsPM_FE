import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import orgProfileReducer from "./orgProfileSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        orgProfile: orgProfileReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;