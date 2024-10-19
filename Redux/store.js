import { configureStore } from "@reduxjs/toolkit";
import CartScreenReducer from "../Redux/CartSlice";
import FavoriteScreenReducer from "../Redux/FavoriteSlice";
import UserScreenReducer from "../Redux/UserSlice";
export const store = configureStore({
    reducer: {
        CartScreenReducer,
        FavoriteScreenReducer,
        User: UserScreenReducer
    }
})
