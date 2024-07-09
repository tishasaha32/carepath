import React from "react";
import HomePageHeader from "../component/HomePageHeader";
import SwitchCategoryHomePage from "../component/SwitchCategoryHomePage";
import BottomNavbar from "../common/BottomNavbar";
import { useSelector } from "react-redux";
import HomePageDates from "../component/HomePageDates";

function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <HomePageHeader />
      <SwitchCategoryHomePage />
      <HomePageDates />
      <BottomNavbar />
    </div>
  );
}

export default Home;
