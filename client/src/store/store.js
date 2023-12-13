import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import drawerSlice from "./features/drawerSlice";

export default configureStore({
    reducer: { cart: cartSlice, drawer: drawerSlice },
});
