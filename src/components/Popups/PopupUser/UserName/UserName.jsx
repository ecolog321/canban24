import { PopUserName } from "./UserName.styled";

function UserName() {
  return (
    <PopUserName>{JSON.parse(localStorage.getItem("user")).name}</PopUserName>
  );
}

export default UserName;
