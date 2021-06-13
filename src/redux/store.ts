import { createStore, combineReducers } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";

const rootReducers = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducers);

export type RootState = ReturnType<typeof store.getState>;

export default store;