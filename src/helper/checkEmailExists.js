// checkEmail.js
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const checkEmailExists = async (email) => {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  return !querySnapshot.empty;
};

export default checkEmailExists;
