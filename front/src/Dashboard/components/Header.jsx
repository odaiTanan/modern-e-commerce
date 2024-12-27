import React from "react";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { SideBareCon } from "../../context/SideBarContext";
import { Axios } from "../../api/Axios";
import { USER } from "../../api/api";
import { Link } from "react-router-dom";
import Logout from "../../auth/Logout";
import UserTitle from "../../components/UserTitle";
const Header = () => {
  const sideBarContext = useContext(SideBareCon);
  const [user, setUser] = useState("");

  useEffect(() => {
    Axios.get(USER)
      .then((res) => setUser(res.data))
      .catch((err) => {
        nav("/login", { replace: true });
      });
  }, []);
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
      <UserTitle />
    </div>
  );
};

export default Header;
