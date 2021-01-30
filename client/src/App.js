import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { Navbar } from "./components/Navbar";
import "materialize-css";

function App() {
  const { token, userId, login, logout } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ token, userId, login, logout, isAuthenticated }}
    >
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
