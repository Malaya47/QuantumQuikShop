import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId) => {
    const response = await axios.get(
      `http://localhost:3000/productDetails/${productId}`
    );
    console.log(response.data.product);
    return response.data.product;
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
  productDetail: {},
  products: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: [],
  filteredProducts: null,
  cart: {
    cartArray: [],
    cartQuantity: null,
  },
  wishlist: [],
  status: "idle",
  error: null,
  selectedCategory: [],
  selectedRating: null,
  selectedPrice: null,
  selectedSort: null,
  searchKeyWord: "",
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
      state.menProducts = action.payload;
    },
    emptyWomenArray: (state, action) => {
      state.womenProducts = action.payload;
    },
    emptyKidsArray: (state, action) => {
      state.kidsProducts = action.payload;
    },
    addToCart: (state, action) => {
      const itemPresent = state.cart.cartArray.find(
        (item) => item._id === action.payload._id
      );

      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.cartArray.push(action.payload);
        // state.cart.cartArray = [...state.cart.cartArray, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.cartArray.filter(
        (item) => item._id !== action.payload
      );
      state.cart.cartArray = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.cartArray.find(
        (item) => item._id === action.payload
      );

      itemPresent.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.cartArray.find(
        (item) => item._id === action.payload
      );
      if (itemPresent.quantity === 1) {
        const removeFromCart = state.cart.cartArray.filter(
          (item) => item._id !== action.payload
        );
        state.cart.cartArray = removeFromCart;
      } else {
        itemPresent.quantity--;
      }
    },
    addToWishlist: (state, action) => {
      const itemPresent = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (itemPresent) {
        return;
      } else {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      const removeWishList = state.wishlist.filter(
        (product) => product._id !== action.payload
      );
      state.wishlist = removeWishList;
    },
    searchProduct: (state, action) => {
      state.searchKeyWord = action.payload;
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
    // for Women products
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
    // for Kids products
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
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
  removeFromWishList,
  searchProduct,
} = filterSlice.actions;

export default filterSlice.reducer;
