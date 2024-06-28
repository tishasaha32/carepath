import { useCallback } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config.js";
import useCheckEmailExists from "./useCheckEmailExists.jsx";
import useCheckPassword from "./useCheckPassword.jsx";

const useHandleRegister = () => {
  const checkEmailExists = useCheckEmailExists();
  const checkPassword = useCheckPassword();

  const handleRegister = useCallback(
    async (email, password, fullName, phoneNumber) => {
      try {
        const userExists = await checkEmailExists(email);
        if (userExists) {
          console.log("user already registered");
          return;
        }

        if (!checkPassword(password)) {
          console.log("Password must be at least 6 characters long");
          return;
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
        }
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } catch (error) {
        console.error("Error during registration:", error);
      }
    },
    [checkEmailExists, checkPassword]
  );

  return handleRegister;
};

export default useHandleRegister;
