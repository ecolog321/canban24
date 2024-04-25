import "../../src/App.css";
import Header from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { PopNewCard } from "../components/Popups/PopNewCard/PopNewCard";
import { PopupBrowse } from "../components/Popups/PopupBrowse/PopupBrowse";
import { PopupExit } from "../components/Popups/PopupExit/PopupExit";
import { useState, useEffect } from "react";
import { Wrapper } from "../components/styles/shared";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";

function HomePage() {
  const [tasks, setTaskList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const userToken = JSON.parse(localStorage.getItem("user")).token;

  useEffect(() => {
    getTasks(userToken)
      .then((data) => {
        setTaskList(data.tasks);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Outlet />
      <Wrapper>
        <PopupExit />

        <PopNewCard tasks={tasks} setTaskList={setTaskList} />

        <PopupBrowse />

        <Header />
        <Main tasks={tasks} isLoading={isLoading} error={error} />
      </Wrapper>
    </>
  );
}

export default HomePage;
