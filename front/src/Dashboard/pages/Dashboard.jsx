import React, { useContext } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { SideBareCon } from "../../context/SideBarContext";
const Dashboard = () => {
  const sideBarContext = useContext(SideBareCon);
  const open = sideBarContext.barState == 1;
  return (
    <div id="dashboard">
      <Header />
      <div id="con">
        {/*shadow page next to side bar in mobile screen*/}
        <div
          className="shadow-page"
          style={{ display: open ? "block" : "none" }}
        ></div>
        <SideBar />
        <div
          className="dashContent"
          style={{
            width: open == 1 ? "calc(100% - 250px)" : "calc(100% - 60px)",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
