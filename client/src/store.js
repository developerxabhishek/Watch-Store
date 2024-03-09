import { configureStore } from "@reduxjs/toolkit";
import userIdReducer from "./Slices/userSlice";
import productDetailsReducer from "./Slices/productDetailsSlice";
import cartReducer from "./Slices/cartSlice";
import wishlistReducer from "./Slices/WishlistSlice";
import userDetailReducer from "./Slices/userDetailSlice";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",  storage: AsyncStorage,

};
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedWishlist = persistReducer(persistConfig, wishlistReducer);
const persistedUserDetails = persistReducer(persistConfig, userDetailReducer);
const store = configureStore({
  reducer: {
    userId: userIdReducer,
    productDetails: productDetailsReducer,
    cartSlice: persistedCartReducer,
    wishlistSlice: persistedWishlist,
    userDetailsReducer: persistedUserDetails,
  },
});
export const persistor = persistStore(store);
export default store;
