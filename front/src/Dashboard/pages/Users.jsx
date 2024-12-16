import React, { useEffect, useState } from "react";
import axios from "axios";
import { DELETE_USER, host, USER, USERS } from "../../api/api";
import Cookie from "cookie-universal";
import { Axios } from "../../api/Axios";
import Table from "../components/Table";
import Loading from "../../components/Loading";
import TableLoading from "../components/TableLoading";
import { useContext } from "react";
import { deleteContext } from "../../context/DeleteContext";
const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState("");
  const [deleted, setDeleted] = useState(false);
  const deletedContext = useContext(deleteContext);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    try {
      Axios.get(USER).then((res) =>
        setCurrentUser({ id: res.data.id, name: res.data.name })
      );
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    setLoading(true);
    Axios.get(USERS)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [deletedContext.deleted]);

  return (
    <div className="main-dash">
      {loading ? (
        <TableLoading />
      ) : (
        users !== "" && (
          <Table
            headers={["name", "email", "role"]}
            data={users}
            delete={DELETE_USER}
            isUser={true}
            currentUser={currentUser}
          />
        )
      )}
    </div>
  );
};

export default Users;
