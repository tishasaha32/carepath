import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  setDoc,
  doc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../../firebase/config.js";
import useCheckEmailExists from "../../hooks/useCheckEmailExists.jsx";
import useCheckPassword from "../../hooks/useCheckPassword.jsx";
import { useNavigate } from "react-router-dom";
import checkEmailExists from "../../helper/checkEmailExists.js";

// Create the emailSignup async thunk
export const emailSignup = createAsyncThunk(
  "auth/emailSignup",
  async ({ email, password, fullName, phoneNumber }, thunkAPI) => {
    try {
      const isPresent = await checkEmailExists(email);

      if (isPresent) {
        return thunkAPI.rejectWithValue("Email already exists");
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res?.user) {
        await setDoc(doc(db, "users", res?.user.uid), {
          fullName: fullName,
          email: email,
          photoURL: "",
          phoneNumber: phoneNumber,
          disease: [],
        });
        console.log("User created successfully");

        return res.user;
      }
    } catch (error) {
      console.error("Error during registration:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const emailSignin = createAsyncThunk(
  "auth/emailSignin",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res?.user) {
        console.log("User logged in successfully", res.user.email);
        return res.user.email;
      }
    } catch (error) {
      console.error("Error during login:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create the auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(emailSignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(emailSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(emailSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(emailSignin.pending, (state) => {
        state.loading = true;
      })
      .addCase(emailSignin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(emailSignin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
