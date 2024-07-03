import React from "react";
import HomePageHeader from "../component/HomePageHeader";
import SwitchCategoryHomePage from "../component/SwitchCategoryHomePage";
import BottomNavbar from "../common/BottomNavbar";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <HomePageHeader />
      <SwitchCategoryHomePage />
      <h3>{user}</h3>
      <BottomNavbar />
    </div>
  );
}

export default Home;
