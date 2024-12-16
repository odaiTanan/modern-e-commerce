import {
  faCartFlatbedSuitcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import React, { useContext } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SideBareCon } from "../../context/SideBarContext";
import SideBarLink from "./SideBarLink";
const SideBar = () => {
  const sideBarCon = useContext(SideBareCon);
  const open = sideBarCon.barState == 1;
  return (
    <div className="side-bar" style={{ width: open == 1 ? "250px" : "60px" }}>
      <SideBarLink linkTo="users" name="users" icon={faUsers} />
      <SideBarLink
        linkTo="products"
        name="products"
        icon={faCartFlatbedSuitcase}
      />
    </div>
  );
};

export default SideBar;
