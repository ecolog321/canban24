import { Link } from "react-router-dom";
import { HeaderBtn } from "./HeaderButtonNew.styled";
import { AppRoutes } from "../../../../lib/routes";

function HeaderButtonNew() {
  return (
    <HeaderBtn>
      <Link to={AppRoutes.ADDCARD}>Создать новую задачу</Link>
    </HeaderBtn>
  );
}

export default HeaderButtonNew;
