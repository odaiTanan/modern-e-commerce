import React from "react";
import Cookie from "cookie-universal";
import { useEffect } from "react";
import axios from "axios";
import { host, USER } from "../api/api";
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const RequiredAuth = () => {
  const cookie = Cookie();
  const token = cookie.get("token");
  const nav = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(host + USER, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        nav("/login", { replace: true });
      });
  }, []);
  return token ? (
    user !== "" ? (
      <Outlet />
    ) : (
      <Loading />
    )
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default RequiredAuth;
