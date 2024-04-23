import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { AppRoutes } from "./lib/routes";
import SignInPage from "./pages/registation";
import NotFoundPage from "./pages/notFoundpage";
import { useState } from "react";
import ViewCard from "./pages/viewcard";
import ExitPage from "./pages/exit";
import { GlobalStyle } from "./components/styles/Global.styled";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  function userLogin(newUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    navigate(AppRoutes.HOME);
  }

  function logOut() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(AppRoutes.LOGIN);
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={AppRoutes.HOME} element={<HomePage user={user} />}>
            <Route
              path={AppRoutes.EXIT}
              element={<ExitPage user={user} logOut={logOut} />}
            ></Route>
            <Route
              path={AppRoutes.CARD}
              user={user}
              element={<ViewCard />}
            ></Route>
          </Route>
        </Route>
        <Route
          path={AppRoutes.LOGIN}
          element={<LoginPage user={user} userLogin={userLogin} />}
        ></Route>
        <Route
          path={AppRoutes.SIGNIN}
          element={<SignInPage user={user} userLogin={userLogin} />}
        ></Route>
        <Route path={AppRoutes.NOTFOUND} element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
