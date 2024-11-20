import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

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

//   generating token
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

//   registering user
export const signUpUser = createAsyncThunk(
  "signUp/user",
  async (userDetails) => {
    const response = await axios.post(`${API_URL}/register`, userDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
);

const initialState = {
  token: localStorage.getItem("admin-token") || null,
  addresses: [],
  status: "idle",
  error: null,
};

export const logInRegisterSlice = createSlice({
  name: "logInRegister",
  initialState,
  reducers: {
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
    removeTokenFromRedux: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    // for authentication
    builder.addCase(generateToken.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(generateToken.fulfilled, (state, action) => {
      state.status = "Success";

      state.token = action.payload.token;
      localStorage.setItem("admin-token", action.payload.token);
    });
    builder.addCase(generateToken.rejected, (state, action) => {
      state.error = "error";
    });
    builder.addCase(signUpUser.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.error = "error";
    });
  },
});

export const {
  addAddresses,
  updateAddress,
  removeAddress,
  removeTokenFromRedux,
} = logInRegisterSlice.actions;

export default logInRegisterSlice.reducer;
