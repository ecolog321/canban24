import { Wrapper } from "../components/styles/shared";
import { Login } from "../components/Login/Login";

function LoginPage({userLogin}) {
  return (
    <>
      <Wrapper>
        <Login userLogin={userLogin} />
      </Wrapper>
    </>
  );
}

export default LoginPage;
