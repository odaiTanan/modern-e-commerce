import {
  faCartFlatbedSuitcase,
  faUsers,
  faUserPlus,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useEffect, useState } from "react";
import { SideBareCon } from "../../context/SideBarContext";
import { NavLink, useNavigate } from "react-router-dom";
import { navs } from "./SideBarLink";
import { Axios } from "../../api/Axios";
import { USER } from "../../api/api";
const SideBar = () => {
  const sideBarCon = useContext(SideBareCon);
  const open = sideBarCon.barState == 1;
  const [user, setUser] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    Axios.get(USER)
      .then((res) => setUser(res.data))
      .catch((err) => {
        nav("/login", { replace: true });
      });
  }, []);
  return (
    <div className="side-bar" style={{ width: open == 1 ? "250px" : "60px" }}>
      {navs.map((nav, index) => {
        return (
          nav.role.includes(user.role) && (
            <NavLink
              key={index}
              className={!open ? "center link" : " link"}
              style={{ width: !open && "50px" }}
              to={nav.path}
            >
              {" "}
              <FontAwesomeIcon icon={nav.icon} className="side-bar-icon" />
              <span
                className="activ"
                style={{ display: open == 1 ? "flex" : "none" }}
              >
                {nav.name}
              </span>
            </NavLink>
          )
        );
      })}
    </div>
  );
};

export default SideBar;
