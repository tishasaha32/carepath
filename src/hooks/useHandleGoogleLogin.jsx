import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

function useHandleGoogleLogin() {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      if (result.user) {
        setTimeout(() => {
          window.location.href = "/diseaseCategories";
        }, 2000);
      }
      await setDoc(doc(db, "users", result.user.uid), {
        fullName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        disease: [],
      });
    });
  };
  return { googleLogin };
}

export default useHandleGoogleLogin;
