import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function checkLocal() {
  try {
    const user = JSON.parse(localStorage.getItm("user"));
    return user;
  } catch (error) {
    localStorage.removeItem("user");
    return null;
  }
}

export const UserContext = createContext(null);

export const UserProvider = () => {
  const [user, setUser] = useState(checkLocal());
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
    <UserContext.Provider value={{user, userLogin, logOut}}/>
  )
};
