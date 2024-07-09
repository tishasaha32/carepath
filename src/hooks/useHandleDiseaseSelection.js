import { doc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../firebase/config";

function useHandleDiseaseSelection(selectedDisease) {
  const user = useSelector((state) => state.auth.user);

  const handleDiseaseSelection = async () => {
    if (!user) {
      console.error("User is not logged in");
      return;
    }

    try {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        disease: selectedDisease,
      });
      console.log("Document updated successfully");
    } catch (error) {
      console.error("Error updating document:", error);
      console.log("Failed to update document");
    }
  };

  return handleDiseaseSelection;
}

export default useHandleDiseaseSelection;
