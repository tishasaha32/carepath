import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/config";

function useGetUserDisease() {
  const [disease, setDisease] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    async function fetchUserDocument(userId) {
      const docRef = doc(db, "users", userId);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDisease([...docSnap.data().disease]);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    }

    if (user && user.uid) {
      fetchUserDocument(user.uid);
    }
  }, [user]);
  return { disease };
}

export default useGetUserDisease;
