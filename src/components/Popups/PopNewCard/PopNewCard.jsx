import { useNavigate } from "react-router-dom";
import { postTask } from "../../../api";
import Calendar from "../../Calendar/Calendar";
import {
  PopNew,
  PopNewBlock,
  PopNewButton,
  PopNewContainer,
  PopNewContent,
  PopNewWrap,
} from "./PopNewCard.styled";
import { PopNewCardCategories } from "./PopNewCardCategories/PopNewCardCategories";
import { PopNewCardForm } from "./PopNewCardForm/PopNewCardForm";
import { useState } from "react";
import { AppRoutes } from "../../../lib/routes";
import { useUserContext } from "../../../context/hooks/useUser";
import { useTasks } from "../../../context/hooks/useTasks";

export function PopNewCard({ $display }) {
  const { tasks, setTaskList } = useTasks();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const [error, setError] = useState();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const taskData = { ...newTask, date: selected };
try {
  postTask({ ...taskData, token: user?.token })
      .then((responseData) => setTaskList(responseData.tasks))
      .then(navigate(-1))
} catch (err) {
  setError(err.message)
}
//вывести ошибку
  }

  return (
    <PopNew $display={$display}>
      <PopNewContainer>
        <PopNewBlock>
          <PopNewContent>
            <h3>Создание задачи</h3>
            {error ? <h2 style={{ color: "red" }}>{error}</h2> : <></>}
            <a href=""></a>
            <PopNewWrap>
              <PopNewCardForm newTask={newTask} setNewTask={setNewTask} />
              <Calendar selected={selected} setSelected={setSelected} />
              <PopNewCardCategories newTask={newTask} setNewTask={setNewTask} />
            </PopNewWrap>
            <PopNewButton onClick={handleSubmit}>Создать задачу</PopNewButton>
          </PopNewContent>
        </PopNewBlock>
      </PopNewContainer>
    </PopNew>
  );
}
