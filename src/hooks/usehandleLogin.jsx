import { useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import useCheckEmailExists from "./useCheckEmailExists";

const useHandleLogin = () => {
  const checkEmailExists = useCheckEmailExists();

  const handleLogin = useCallback(
    async (email, password) => {
      try {
        const emailExists = await checkEmailExists(email);
        if (!emailExists) {
          return;
        }
        await signInWithEmailAndPassword(auth, email, password);
        setTimeout(() => {
          window.location.href = "/diseaseCategories";
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
    [checkEmailExists]
  );

  return handleLogin;
};

export default useHandleLogin;
