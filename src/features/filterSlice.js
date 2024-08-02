import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );
    // console.log(response.data);
    return response.data;
  }
);

const initialState = {
  products: [],
  filteredProducts: [],
  cart: [],
  wishlist: [],
  status: "idle",
  error: null,
  selectedCategory: [],
  selectedRating: null,
  selectedPrice: null,
  selectedSort: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    getSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
      console.log(current(state));
    },

    getSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
      console.log(current(state));
    },
    getSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
      console.log(current(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "error";
      console.log(action);
    });
  },
});

export const {
  getSelectedRating,
  getSelectedPrice,
  getSelectedSort,
  getSelectedCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
