
import { Wrapper } from "../components/styles/shared";
import { Signin } from "../components/Signin/SignIn";

function SignInPage({userLogin}) {
  return (
    <>
      <Wrapper>
        <Signin userLogin={userLogin} />
      </Wrapper>

    </>
  );
}

export default SignInPage;