import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;

export const postProductInCart = createAsyncThunk(
  "products/addToCart",
  async (product) => {
    const response = await axios.post(
      `${API_URL}/products/addToCart`,
      product,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("admin-token")}`,
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

const initialState = {
  cart: {
    cartArray: [],
    cartQuantity: null,
  },
  gotoCart: {},
  status: "idle",
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
    gotoCartToggle: (state, action) => {
      state.gotoCart = { ...state.gotoCart, ...action.payload };
    },
  },
  extraReducers: (builder) => {
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
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  gotoCartToggle,
} = cartSlice.actions;

export default cartSlice.reducer;
