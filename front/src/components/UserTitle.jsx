import React, { useEffect, useState } from "react";
import { USER } from "../api/api";
import { Axios } from "../api/Axios";
import Logout from "../auth/Logout";

const UserTitle = () => {
  const [user, setUser] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Axios.get(USER)
      .then((res) => setUser(res.data))
      .catch((err) => {
        nav("/login", { replace: true });
      });
  }, []);
  return (
    <span class="userTitle center" onClick={() => setOpen(!open)}>
      <span>{user && user.name[0].toUpperCase()}</span>
      <ul className="userInfo" style={{ display: open ? "flex" : "none" }}>
        <li id="photo" className="center">
          {" "}
          <span class="userTitle center">
            <span>{user && user.name[0].toUpperCase()}</span>
          </span>
          <h1>{user.name}</h1>
        </li>

        <li id="email">{user.email}</li>

        <h1>
          <Logout />
        </h1>
      </ul>
    </span>
  );
};

export default UserTitle;
