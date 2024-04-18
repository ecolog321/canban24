import { HeaderUser } from "./HeaderHref.styled";

function HeaderHref({tooglePopup}) {
  return (

    <HeaderUser onClick={tooglePopup}>Ivan Ivanov</HeaderUser>
  );
}

export default HeaderHref;
