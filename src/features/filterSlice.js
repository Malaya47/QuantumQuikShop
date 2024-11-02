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

export const postProductInCart = createAsyncThunk(
  "products/addToCart",
  async (product) => {
    const response = await axios.post(
      `${API_URL}/products/addToCart`,
      product,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
);

export const putIncreaseQuantity = createAsyncThunk(
  "product/putIncrease",
  async (product) => {
    const response = axios.put(
      `${API_URL}/product/updateQuantity/${product._id}`,
      { ...product, quantity: product.quantity + 1 }
    );
    return response.data;
  }
);

export const putDecreaseQuantity = createAsyncThunk(
  "product/putDecrease",
  async (product) => {
    const response = axios.put(
      `${API_URL}/product/updateQuantity/${product._id}`,
      { ...product, quantity: product.quantity - 1 }
    );
    return response.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/product/deleteProduct/${id}`
    );

    return response.data;
  }
);

export const postProductInWishlist = createAsyncThunk(
  "products/addToWishlist",
  async (product) => {
    const response = await axios.post(
      `${API_URL}/products/addToWishlist`,
      product,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
);

export const deleteWishlistItem = createAsyncThunk(
  "product/deleteWishlistProduct",
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/product/deleteProductWishlist/${id}`
    );

    return response.data;
  }
);

// API requests for handling addresses
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (address) => {
    const response = await axios.post(
      `${API_URL}/addresses/addAddress`,
      address,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

export const updatedAddress = createAsyncThunk(
  "address/updateAddress",
  async (updatedAddress) => {
    const response = await axios.put(
      `${API_URL}/addresses/updateAddress/${updatedAddress.id}`,
      updatedAddress
    );
    return response.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/addresses/deleteAddress/${id}`
    );
    return response.data;
  }
);

export const generateToken = createAsyncThunk(
  "token/getToken",
  async (userDetails) => {
    const response = await axios.post(`${API_URL}/login`, userDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
);

const initialState = {
  loginToken: "",
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
  selectedPrice: 2000,
  selectedSort: null,
  searchKeyWord: "",
  gotoCart: {},
  addresses: [],
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
    heartIconToggler: (state, action) => {
      state.heartIcon = action.payload;
    },
    gotoCartToggle: (state, action) => {
      state.gotoCart = { ...state.gotoCart, ...action.payload };
    },
    addAddresses: (state, action) => {
      state.addresses = [...state.addresses, action.payload];
    },
    updateAddress: (state, action) => {
      const addressIndex = state.addresses.findIndex(
        (add) => add.id === action.payload.id
      );

      if (addressIndex !== -1) {
        // Update the address at the found index with the new data
        state.addresses[addressIndex] = {
          ...state.addresses[addressIndex],
          ...action.payload,
        };
      }
    },
    removeAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        (add) => add.id !== action.payload
      );
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

    // cases for adding data in cart database
    builder.addCase(postProductInCart.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(postProductInCart.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(postProductInCart.rejected, (state, action) => {
      state.status = "error";
    });
    // cart increaseQuantity put request
    builder.addCase(putIncreaseQuantity.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(putIncreaseQuantity.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(putIncreaseQuantity.rejected, (state, action) => {
      state.status = "error";
    });
    // cart decreaseQuantity put request
    builder.addCase(putDecreaseQuantity.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(putDecreaseQuantity.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(putDecreaseQuantity.rejected, (state, action) => {
      state.status = "error";
    });

    // delete cart item
    builder.addCase(deleteCartItem.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(deleteCartItem.rejected, (state, action) => {
      state.status = "error";
    });

    // for adddig data in wishlist
    builder.addCase(postProductInWishlist.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(postProductInWishlist.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(postProductInWishlist.rejected, (state, action) => {
      state.status = "error";
    });

    // for deleting wishlist item
    builder.addCase(deleteWishlistItem.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(deleteWishlistItem.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(deleteWishlistItem.rejected, (state, action) => {
      state.status = "error";
    });

    // for authentication
    builder.addCase(generateToken.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(generateToken.fulfilled, (state, action) => {
      state.status = "Success";
      state.loginToken = action.payload.token;
    });
    builder.addCase(generateToken.rejected, (state, action) => {
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
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
  removeFromWishList,
  searchProduct,
  heartIconToggler,
  gotoCartToggle,
  addAddresses,
  updateAddress,
  removeAddress,
} = filterSlice.actions;

export default filterSlice.reducer;
