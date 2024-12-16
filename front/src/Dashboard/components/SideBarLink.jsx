import React from "react";
import { useContext } from "react";
import { SideBareCon } from "../../context/SideBarContext";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SideBarLink = (props) => {
  const sideBarCon = useContext(SideBareCon);
  const open = sideBarCon.barState == 1;
  return (
    <NavLink
      className={!open ? "center link" : " link"}
      style={{ width: !open && "50px" }}
      to={props.linkTo}
    >
      {" "}
      <FontAwesomeIcon icon={props.icon} className="side-bar-icon" />
      <span className="activ" style={{ display: open == 1 ? "flex" : "none" }}>
        {props.name}
      </span>
    </NavLink>
  );
};

export default SideBarLink;
