import { useNavigate } from "react-router-dom";
import { postTask } from "../../../api";
import { useUserContext } from "../../../context/hooks/useUser";
import Calendar from "../../Calendar/Calendar";
import {
  PopNew,
  PopNewBlock,
  PopNewContainer,
  PopNewContent,
} from "./PopNewCard.styled";
import { PopNewCardCategories } from "./PopNewCardCategories/PopNewCardCategories";
import { PopNewCardForm } from "./PopNewCardForm/PopNewCardForm";
import { useState } from "react";
import { AppRoutes } from "../../../lib/routes";

export function PopNewCard({ $display }) {
  const { user } = useUserContext();
  const navigate=useNavigate();
  const [selected, setSelected] = useState();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const taskData = { ...newTask, date: selected };
    postTask({...taskData, token: user?.token })
      .then(
        (responseData) => navigate(AppRoutes.HOME)
        /* {setTaskList(responseData.tasks)} */
      )
      .catch((err) => console.log(err.message)); //вывести ошибку
  }

  return (
    <PopNew $display={$display}>
      <PopNewContainer>
        <PopNewBlock>
          <PopNewContent>
            <h3>Создание задачи</h3>
            <a href=""></a>
            <div>
              <PopNewCardForm newTask={newTask} setNewTask={setNewTask}/>
              <Calendar selected={selected} setSelected={setSelected} />
              <PopNewCardCategories newTask={newTask} setNewTask={setNewTask} />
            </div>
            <button
              onClick={handleSubmit}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </PopNewContent>
        </PopNewBlock>
      </PopNewContainer>
    </PopNew>
  );
}
