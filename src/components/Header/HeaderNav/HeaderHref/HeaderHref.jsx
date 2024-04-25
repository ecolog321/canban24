import { HeaderUser } from "./HeaderHref.styled";

function HeaderHref({tooglePopup}) {
  return (

    <HeaderUser onClick={tooglePopup}>{JSON.parse(localStorage.getItem("user")).name}</HeaderUser>
  );
}

export default HeaderHref;
