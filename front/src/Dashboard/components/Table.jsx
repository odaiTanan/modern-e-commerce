import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DELETE_USER, USER } from "../../api/api";
import { Axios } from "../../api/Axios";
import { deleteContext } from "../../context/DeleteContext";
const Table = (props) => {
  /*use deleted state to refersh showing data when we delete data*/
  const deletedContext = useContext(deleteContext);
  /*get current user */
  const [currentUser, setCurrentUser] = useState(props.currentUser);

  /*headers of table */
  const showHeaders = props.headers.map((head, key) => {
    return <th key={key}>{head}</th>;
  });
  /*remove function to remove user,product... */
  async function remove(id) {
    const res = await Axios.delete(props.delete + id);
    deletedContext.setDeleted((prev) => !prev);
  }
  const isUser = props.isUser | false;
  /*mapping on data by head name */
  const showData = props.data.map((data, key) => {
    {
      return (
        <tr>
          <td>{key + 1}</td>
          {props.headers.map((head, key) => {
            return head == "role" ? (
              data[head] == "1995" ? (
                <td>{"admin"}</td>
              ) : data[head] == "2001" ? (
                <td>{"user"}</td>
              ) : data[head] == "1996" ? (
                <td>{"writer"}</td>
              ) : (
                ""
              )
            ) : head == "name" && isUser && currentUser.id == data.id ? (
              <td>{data[head] + "(you)"}</td>
            ) : (
              <td>{data[head]}</td>
            );
          })}
          {/*edit icon */}
          <td className="icons-con">
            <Link to={`update/${data.id}`}>
              <FontAwesomeIcon
                style={{ color: "green", margin: "0 15px" }}
                icon={faPenToSquare}
              />
            </Link>
            {/*delete icon*/}
            {isUser && currentUser.id == data.id ? (
              ""
            ) : (
              <FontAwesomeIcon
                style={{ color: "red", cursor: "pointer" }}
                icon={faXmark}
                onClick={() => remove(data.id)}
              />
            )}
          </td>
        </tr>
      );
    }
  });
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          {showHeaders}
        </tr>
      </thead>
      <tbody>{showData}</tbody>
    </table>
  );
};

export default Table;
