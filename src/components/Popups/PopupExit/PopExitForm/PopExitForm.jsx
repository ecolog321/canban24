import { useUserContext } from "../../../../context/hooks/useUser";
import { AppRoutes } from "../../../../lib/routes";
import {
  ExitBtnNo,
  ExitBtnYes,
  ExitForm,
  ExitFormGroup,
} from "./PopExitForm.styled";
import { useNavigate } from "react-router-dom";

export const PopExitForm = () => {
  const { logOut } = useUserContext();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
  };

  const handleStay = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <ExitForm>
      <ExitFormGroup>
        <ExitBtnYes onClick={handleLogOut}>Да, выйти</ExitBtnYes>
        <ExitBtnNo onClick={handleStay}>Нет, остаться</ExitBtnNo>
      </ExitFormGroup>
    </ExitForm>
  );
};
