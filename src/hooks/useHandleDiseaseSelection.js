import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useSelector } from "react-redux";

function useHandleDiseaseSelection({ selectedDisease }) {
  const user = useSelector((state) => state.auth.user);

  const handleDiseaseSelection = async () => {
    try {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        disease: [...selectedDisease],
      });
      console.log("Document updated successfully");
    } catch (error) {
      console.error("Error updating document: ", error);
      console.log("Failed to update document");
    }
  };
  return { handleDiseaseSelection };
}

export default useHandleDiseaseSelection;
