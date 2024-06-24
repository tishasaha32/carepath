import React from "react";
import HomePageHeader from "../component/HomePageHeader";
import SwitchCategoryHomePage from "../component/SwitchCategoryHomePage";
import BottomNavbar from "../common/BottomNavbar";

function Home() {
  return (
    <div>
      <HomePageHeader />
      <SwitchCategoryHomePage />
      <BottomNavbar />
    </div>
  );
}

export default Home;
