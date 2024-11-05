import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import cartReducer from "../features/cartSlice";
import wishlistReducer from "../features/wishlistSlice";
import logInRegisterReducer from "../features/logInRegisterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    logInRegister: logInRegisterReducer,
   
  },
});
