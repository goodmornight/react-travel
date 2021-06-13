import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsDetailState {
  data: any,
  loading: boolean,
  error: string | null
}

const initialState: ProductsDetailState = {
  data: null,
  loading: true,
  error: null
}

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = false
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFail: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
})