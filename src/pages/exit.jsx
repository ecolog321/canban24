import Header from "../components/Header/Header";

import { Wrapper } from "../components/styles/shared";
import { PopupExit } from "../components/Popups/PopupExit/PopupExit";

function ExitPage({ logOut }) {
  return (
    <>
      <Wrapper>
        <Header></Header>
        <PopupExit logOut={logOut} $display />
      </Wrapper>
    </>
  );
}

export default ExitPage;
