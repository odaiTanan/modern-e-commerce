import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import SideBarContext from "./context/SideBarContext.jsx";
import DeleteContext from "./context/DeleteContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <DeleteContext>
        <SideBarContext>
          <App />
        </SideBarContext>
      </DeleteContext>
    </Router>
  </StrictMode>
);
