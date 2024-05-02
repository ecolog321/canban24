import { useContext } from "react";
import { UserContext } from "../userContext/userContext";

export const useUserContext = () => {
  return useContext(UserContext);
};
