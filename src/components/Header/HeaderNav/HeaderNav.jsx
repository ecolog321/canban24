import HeaderButtonNew from "./HeaderButtonNew/HeaderButtonNew.jsx";
import HeaderHref from "./HeaderHref/HeaderHref.jsx";
import PopupUser from "../../Popups/PopupUser/PopupUser.jsx";
import { useState } from "react";
import { HeaderN } from "./HeaderNav.styled.js";

function HeaderNav() {
  const [showPopup, setShowPopup] = useState(false);

  const tooglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <HeaderN>
      <HeaderButtonNew />
      <HeaderHref tooglePopup={tooglePopup} />
      {showPopup && <PopupUser />}
    </HeaderN>
  );
}

export default HeaderNav;
