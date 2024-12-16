import React, { useEffect } from "react";
import axios from "axios";
import { GOOGLE_CALL_BACK, host } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import Loading from "../components/Loading";
const GoogleCallback = () => {
  const location = useLocation();
  const cookie = Cookie();
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get(host + GOOGLE_CALL_BACK + location.search)
      .then((res) => {
        cookie.set("token", res.data.access_token);
        nav("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default GoogleCallback;
