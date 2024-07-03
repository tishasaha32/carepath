import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/config.js";
import { GoogleAuthProvider } from "firebase/auth";
// import { displayName } from "react-quill";

export const emailSignup = createAsyncThunk(
  "auth/emailSignup",
  async ({ email, password, fullName, phoneNumber }, thunkAPI) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("res :", res, "res?.user :", res?.user);
      if (res?.user) {
        await setDoc(doc(db, "users", res?.user.uid), {
          displayName: fullName,
          email: email,
          photoURL: "",
          phoneNumber: phoneNumber,
          disease: [],
          id: res.user.uid,
        });
        console.log("User created successfully");
        console.log("res.user :", res.user);
        return res.user.email;
      }
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.code === "auth/email-already-in-use") {
        return thunkAPI.rejectWithValue("Email already exists");
      } else if (error.code === "auth/weak-password") {
        return thunkAPI.rejectWithValue(
          "Password should be at least 6 characters"
        );
      }
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
        await setDoc(doc(db, "users", res?.user.uid), {
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          phoneNumber: res.user.phoneNumber,
          disease: [],
          id: res.user.uid,
        });
        console.log("User logged in successfully", res.user.email);
        return res.user.email;
      }
    } catch (error) {
      console.error("Error during login:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const googleSignin = createAsyncThunk(
  "auth/googleSignin",
  async (_, thunkAPI) => {
    try {
      console.log("googleSignin called");
      const provider = new GoogleAuthProvider();
      console.log(provider, "provider");
      const res = await signInWithPopup(auth, provider);
      console.log(res, "res");
      if (res?.user) {
        await setDoc(doc(db, "users", res?.user.uid), {
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          phoneNumber: res.user.phoneNumber,
          disease: [],
          id: res.user.uid,
        });
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
  reducers: {
    setUser: (state, action) => {
      console.log("action.payload :", action.payload);
      state.user = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
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
      })
      .addCase(googleSignin.pending, (state) => {
        state.loading = true;
      })
      .addCase(googleSignin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(googleSignin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setUser, clearUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
