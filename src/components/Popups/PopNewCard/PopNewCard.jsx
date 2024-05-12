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
import { useUserContext } from "../../../context/hooks/useUser";
import { useTasks } from "../../../context/hooks/useTasks";

export function PopNewCard({ $display }) {
  const { tasks, setTaskList } = useTasks();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (newTask.title.length < 3) {
      setError("Заполните заголовок, не менее 3 символов");
      return;
    }

    if (newTask.description === "") {
      setError("Заполните описание");
      return;
    }

    if (selected === undefined) {
      setError("Укажите срок исполнения");
      return;
    }

    if (newTask.topic === "") {
      setError("Выберите категорию");
      return;
    }

    const newTaskData = { ...newTask, date: selected };

    try {
      const tasksData = await postTask({ ...newTaskData, token: user?.token });
      setTaskList(tasksData.tasks);
      navigate(-1);
    } catch (err) {
      setError(err.message);
    }
  }

  const closeWindow = () => {
    navigate(-1);
  };

  return (
    <PopNew $display={$display}>
      <PopNewContainer>
        <PopNewBlock>
          <PopNewContent>
            <h3>Создание задачи</h3>
            {error ? <h2 style={{ color: "red" }}>{error}</h2> : <></>}
            <PopNewWrap>
              <PopNewCardForm newTask={newTask} setNewTask={setNewTask} />
              <Calendar selected={selected} setSelected={setSelected} />
              <PopNewCardCategories newTask={newTask} setNewTask={setNewTask} />
            </PopNewWrap>
            <PopNewButton onClick={handleSubmit}>Создать задачу</PopNewButton>
            <PopNewButton onClick={closeWindow}>Закрыть</PopNewButton>
          </PopNewContent>
        </PopNewBlock>
      </PopNewContainer>
    </PopNew>
  );
}
