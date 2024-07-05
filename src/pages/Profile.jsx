import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, setError } from "../redux/reducer/authSlice";
import { auth } from "../firebase/config";
import { Navigate } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    auth.signOut();
    dispatch(clearUser());
    dispatch(setError(null));
    Navigate("/login");
  };
  return (
    <div>
      {user.displayName}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
