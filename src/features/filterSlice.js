import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId) => {
    const response = await axios.get(`${API_URL}/productDetails/${productId}`);

    return response.data.product;
  }
);
export const fetchMenProducts = createAsyncThunk(
  "products/fetchMenProducts",
  async (category) => {
    const response = await axios.get(
      `${API_URL}/products/category/${category}`
    );
    // console.log(response.data);
    return response.data.products;
  }
);
export const fetchWomenProducts = createAsyncThunk(
  "products/fetchWomenProducts",
  async (category) => {
    const response = await axios.get(
      `${API_URL}/products/category/${category}`
    );
    // console.log(response.data);
    return response.data.products;
  }
);
export const fetchKidsProducts = createAsyncThunk(
  "products/fetchKidsProducts",
  async (category) => {
    const response = await axios.get(
      `${API_URL}/products/category/${category}`
    );
    // console.log(response.data);
    return response.data.products;
  }
);

const initialState = {
  productDetail: {},
  products: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: [],
  filteredProducts: null,
  status: "idle",
  error: null,
  selectedCategory: [],
  selectedRating: null,
  selectedPrice: 2000,
  selectedSort: null,
  searchKeyWord: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    clearFilter: (state, action) => {
      state.selectedPrice = action.payload.selectedPrice;
      state.selectedRating = action.payload.selectedRating;
      state.selectedSort = action.payload.selectedSort;
    },
    getSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    getSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
      console.log(current(state));
    },

    getSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
    getSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
      console.log(current(state));
    },
    emptyMenArray: (state, action) => {
      state.menProducts = action.payload;
    },
    emptyWomenArray: (state, action) => {
      state.womenProducts = action.payload;
    },
    emptyKidsArray: (state, action) => {
      state.kidsProducts = action.payload;
    },
    searchProduct: (state, action) => {
      state.searchKeyWord = action.payload;
    },
    heartIconToggler: (state, action) => {
      state.heartIcon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.status = "Success";
      state.productDetail = action.payload;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.status = "error";
      console.log(action);
    });
    // for Men products
    builder.addCase(fetchMenProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMenProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.menProducts = action.payload;

      // Filter out already existing products in the state.products array
      const newProducts = action?.payload?.filter(
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
    // for Women products
    builder.addCase(fetchWomenProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWomenProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.womenProducts = action.payload;
      console.log(action.payload);
      // Filter out already existing products in the state.products array
      const newProducts = action.payload?.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );

      // Add only new, unique products to the state.products array
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchWomenProducts.rejected, (state, action) => {
      state.status = "error";
    });
    // for Kids products
    builder.addCase(fetchKidsProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchKidsProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.kidsProducts = action.payload;

      // Filter out already existing products in the state.products array
      const newProducts = action.payload?.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );

      // Add only new, unique products to the state.products array
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchKidsProducts.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export const {
  clearFilter,
  getSelectedRating,
  getSelectedPrice,
  getSelectedSort,
  getSelectedCategory,
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
  searchProduct,
  heartIconToggler,
} = filterSlice.actions;

export default filterSlice.reducer;
