import Header from "../components/Header/Header";

import { Wrapper } from "../components/styles/shared";
import { PopupExit } from "../components/Popups/PopupExit/PopupExit";

function ExitPage({ setIsAuth }) {
  return (
    <>
      <Wrapper>
        <Header></Header>
        <PopupExit setIsAuth={setIsAuth} $display />
      </Wrapper>
    </>
  );
}

export default ExitPage;
