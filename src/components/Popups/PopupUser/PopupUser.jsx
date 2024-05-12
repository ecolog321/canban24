import UserName from "./UserName/UserName.jsx";
import UserEmail from "./UserEmail/UserEmail.jsx";
import UserButton from "./UserButton/UserButton.jsx";
import { PopUserSet } from "./PopUser.styled.js";

function PopupUser() {
  return (
    <PopUserSet>
      <UserName />
      <UserEmail />
      <UserButton />
    </PopUserSet>
  );
}

export default PopupUser;
