import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import  { SideBareCon } from "../../context/SideBarContext";
const Header = () => {
  const sideBarContext = useContext(SideBareCon);

  useEffect(() => {
    window.localStorage.setItem("side-bar", 1);
  }, []);
  function handleSideBar() {
    window.localStorage.getItem("side-bar") == 1
      ? window.localStorage.setItem("side-bar", 0)
      : window.localStorage.setItem("side-bar", 1);
    sideBarContext.setBarState(window.localStorage.getItem("side-bar"));
  }
  return (
    <div className="header">
      <div>
        <h2>Store</h2> <FontAwesomeIcon icon={faBars} onClick={handleSideBar} />
      </div>
    </div>
  );
};

export default Header;
