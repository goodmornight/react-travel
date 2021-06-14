import { createStore, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productDetailSlice } from "./productDetail/slice";
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from "./user/slice";
import { shoppingCartSlice } from './shoppingCart/slice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
}

const rootReducers = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer
})


const persistedReducer = persistReducer(persistConfig, rootReducers)
// const store = createStore(rootReducers,applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;

export default { store, persistor };