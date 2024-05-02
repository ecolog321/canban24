import Header from "../components/Header/Header";

import { Wrapper } from "../components/styles/shared";
import { PopupExit } from "../components/Popups/PopupExit/PopupExit";

function ExitPage() {
  return (
    <>
      <Wrapper>
        <Header></Header>
        <PopupExit $display />
      </Wrapper>
    </>
  );
}

export default ExitPage;
