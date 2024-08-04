import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );
    // console.log(response.data);
    return response.data.products;
  }
);
export const fetchMenProducts = createAsyncThunk(
  "products/fetchMenProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );
    // console.log(response.data);
    return response.data.products;
  }
);
export const fetchWomenProducts = createAsyncThunk(
  "products/fetchWomenProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );
    // console.log(response.data);
    return response.data.products;
  }
);
export const fetchKidsProducts = createAsyncThunk(
  "products/fetchKidsProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );
    // console.log(response.data);
    return response.data.products;
  }
);

const initialState = {
  products: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: [],
  filteredProducts: null,
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
    emptyMenArray: (state, action) => {
      state.menProducts = [];
    },
    emptyWomenArray: (state, action) => {
      state.womenProducts = [];
    },
    emptyKidsArray: (state, action) => {
      state.kidsProducts = [];
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
    builder.addCase(fetchMenProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMenProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.menProducts = action.payload;
      // Filter out already existing products in the state.products array
      const newProducts = action.payload.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );

      // Add only new, unique products to the state.products array
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchMenProducts.rejected, (state, action) => {
      state.status = "error";
      console.log(action);
    });
    builder.addCase(fetchWomenProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWomenProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.womenProducts = action.payload;
      // Filter out already existing products in the state.products array
      const newProducts = action.payload.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );

      // Add only new, unique products to the state.products array
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchWomenProducts.rejected, (state, action) => {
      state.status = "error";
      console.log(action);
    });
    builder.addCase(fetchKidsProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchKidsProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.kidsProducts = action.payload;
      // Filter out already existing products in the state.products array
      const newProducts = action.payload.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );

      // Add only new, unique products to the state.products array
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchKidsProducts.rejected, (state, action) => {
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
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
} = filterSlice.actions;

export default filterSlice.reducer;
