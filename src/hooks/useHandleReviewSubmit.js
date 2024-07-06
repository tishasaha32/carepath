import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/config";
import { useSelector } from "react-redux";

function useHandleReviewSubmit({ reviewText, setReviewText, docId }) {
  const user = useSelector((state) => state.auth.user);
  const handleReviewSubmit = async () => {
    if (reviewText.trim()) {
      try {
        await addDoc(collection(db, "reviews"), {
          userId: user.id,
          userName: user.displayName,
          userPhotoURL: user.photoURL,
          recipeId: docId,
          review: reviewText,
        });
        setReviewText("");
      } catch (error) {
        console.error("Error adding review: ", error);
        alert("Failed to submit review. Please try again.");
      }
    }
  };

  return { handleReviewSubmit };
}

export default useHandleReviewSubmit;
