import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

function useHandleResetPassword(email) {
  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent. Check your inbox.");
    } catch (error) {
      console.log(error);
    }
  };
  return { handleResetPassword };
}

export default useHandleResetPassword;
