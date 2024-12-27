import "./css/all.min.css";
import "./css/index.css";
import "./css/media-query/media.css";
import "./css/auth/form.css";
import "./css/components/button.css";
import "./css/components/loading.css";
import "./css/Dashboard/pages/dashboard.css";
import "./css/Dashboard/components/bar.css";
import "./css/Dashboard/components/table.css";
import "./css/Dashboard/form.css";
import "./css/root.css";
import "./css/components/userTitle.css";
import "./css/auth/errorPage.css";
import "./css/dashboard/components/TableLoading.css";
import { Routes, Route } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Users from "./Dashboard/pages/users";
import GoogleCallback from "./auth/GoogleCallback";
import Dashboard from "./Dashboard/pages/dashboard";
import Products from "./Dashboard/pages/Products";
import RequiredAuth from "./auth/RequiredAuth";
import UpdateUser from "./Dashboard/pages/UpdateUser";
import AddUser from "./Dashboard/pages/AddUser";
import ERR403 from "./auth/ERR403";
import Writer from "./Dashboard/pages/Writer";
function App() {
  return (
    <div style={{ position: "relative" }}>
      <Routes>
        {/*puplic routes*/}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        {/*protected routes */}

        <Route path="/dashboard" element={<Dashboard />}>
          <Route element={<RequiredAuth allowedAccess={["1995"]} />}>
            <Route path="users" element={<Users />} />
            <Route path="users/update/:id" element={<UpdateUser />} />
            <Route path="products" element={<Products />} />
            <Route path="addUser" element={<AddUser />} />
          </Route>
          <Route element={<RequiredAuth allowedAccess={["1995", "1996"]} />}>
            <Route path="writer" element={<Writer />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
