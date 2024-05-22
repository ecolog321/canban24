import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../lib/routes";
import { BtnExit } from "./UserButton.styled";
import { useNavigate } from "react-router-dom";

function UserButton() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate(AppRoutes.EXIT);
  };

  return <BtnExit onClick={handleExit}>Выйти</BtnExit>;
}

export default UserButton;
