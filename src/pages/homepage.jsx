import "../../src/App.css";
import Header from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { PopNewCard } from "../components/Popups/PopNewCard/PopNewCard";
import { PopupBrowse } from "../components/Popups/PopupBrowse/PopupBrowse";
import { PopupExit } from "../components/Popups/PopupExit/PopupExit";
import { Wrapper } from "../components/styles/shared";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Outlet />
      <Wrapper>
        <PopupExit />

        <PopNewCard />

        <PopupBrowse />

        <Header />
        <Main />
      </Wrapper>
    </>
  );
}

export default HomePage;
