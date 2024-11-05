import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const postProductInWishlist = createAsyncThunk(
    "products/addToWishlist",
    async (product) => {
      const response = await axios.post(
        `https://major-project-one-backend.vercel.app/products/addToWishlist`,
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
  
  export const deleteWishlistItem = createAsyncThunk(
    "product/deleteWishlistProduct",
    async (id) => {
      const response = await axios.delete(
        `https://major-project-one-backend.vercel.app/product/deleteProductWishlist/${id}`
      );
  
      return response.data;
    }
  );


const initialState = {
    wishlist: [],
    status: "idle",
    error: null,
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
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
    },
    extraReducers: (builder) => {
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
    }
})


export const {addToWishlist, removeFromWishList} = wishlistSlice.actions;


export default wishlistSlice.reducer