import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "../Store/userReducer"
import userReducer from "./userReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// configureStore is used to creat store
export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
  },
  //disable devTools for production
  // devTools:false
});

export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export const useAppDispatch: () => typeof store.dispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
