import {
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  RecommendProductAction,
} from "./recommendProductsActions";

interface RecommendProducts {
  productsList: any[],
  loading: boolean,
  error: string | null
}

const defaultState: RecommendProducts = {
  productsList: [],
  loading: true,
  error: null
}

export default (state = defaultState, action: RecommendProductAction) => {
  switch(action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return {...state, loading: true};
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return {...state, loading: false, productsList: action.payload}
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}