import { PopUserMail } from "./UserEmail.styled";

function UserEmail() {
  return (
    <PopUserMail>{JSON.parse(localStorage.getItem("user")).login}</PopUserMail>
  );
}

export default UserEmail;
