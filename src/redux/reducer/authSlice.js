import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/config.js";
import useCheckEmailExists from "../../hooks/useCheckEmailExists.jsx";
import useCheckPassword from "../../hooks/useCheckPassword.jsx";

// Create the emailSignup async thunk
export const emailSignup = createAsyncThunk(
  "auth/emailSignup",
  async ({ email, password, fullName, phoneNumber }, thunkAPI) => {
    try {
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
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
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
        setTimeout(() => {
          window.location.href = "/diseaseCategories";
        }, 2000);
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
