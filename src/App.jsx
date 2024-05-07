import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./lib/routes";
import SignInPage from "./pages/registation";
import NotFoundPage from "./pages/notFoundpage";
import ViewCard from "./pages/viewcard";
import ExitPage from "./pages/exit";
import { GlobalStyle } from "./components/styles/Global.styled";
import NewCard from "./pages/addcard";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={AppRoutes.HOME} element={<HomePage />}>
            <Route path={AppRoutes.EXIT} element={<ExitPage />}></Route>
            <Route path={AppRoutes.CARD} element={<ViewCard />}></Route>
            <Route path={AppRoutes.ADDCARD} element={<NewCard />}></Route>
          </Route>
        </Route>
        <Route path={AppRoutes.LOGIN} element={<LoginPage />}></Route>
        <Route path={AppRoutes.SIGNIN} element={<SignInPage />}></Route>
        <Route path={AppRoutes.NOTFOUND} element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
