import {
  faCartFlatbedSuitcase,
  faUsers,
  faUserPlus,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
export const navs = [
  {
    name: "Users",
    path: "users",
    icon: faUsers,
    role: ["1995"],
  },
  {
    name: "Products",
    path: "products",
    icon: faCartFlatbedSuitcase,
    role: ["1995"],
  },
  {
    name: "Add User",
    path: "addUser",
    icon: faUserPlus,
    role: ["1995"],
  },
  {
    name: "Writer",
    path: "writer",
    icon: faFilePen,
    role: ["1995", "1996"],
  },
];
