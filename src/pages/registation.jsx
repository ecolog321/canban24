
import { Wrapper } from "../components/styles/shared";
import { Signin } from "../components/Signin/SignIn";

function SignInPage({setIsAuth}) {
  return (
    <>
      <Wrapper>
        <Signin setIsAuth={setIsAuth} />
      </Wrapper>

    </>
  );
}

export default SignInPage;