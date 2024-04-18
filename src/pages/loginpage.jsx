import { Wrapper } from "../components/styles/shared";
import { Login } from "../components/Login/Login";

function LoginPage({ setIsAuth }) {
  return (
    <>
      <Wrapper>
        <Login setIsAuth={setIsAuth} />
      </Wrapper>
    </>
  );
}

export default LoginPage;
