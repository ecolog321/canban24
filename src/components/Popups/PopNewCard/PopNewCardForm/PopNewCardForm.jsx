import { Subtitle } from "../../../styles/shared";
import { PopNewCardArea, PopNewCardBlock, PopNewCardInput, PopNewForm } from "./PopNewCardForm.styled";


export const PopNewCardForm = ({ newTask, setNewTask }) => {
  return (
    <PopNewForm>
      <PopNewCardBlock>
        <Subtitle>Название задачи</Subtitle>
        <PopNewCardInput
          onChange={(e) => {
            setNewTask({ ...newTask, title: e.target.value });
          }}
          placeholder="Введите название задачи..."
          autoFocus
        ></PopNewCardInput>
      </PopNewCardBlock>
      <PopNewCardBlock>
        <Subtitle>Описание задачи</Subtitle>
        <PopNewCardArea
          onChange={(e) => {
            setNewTask({ ...newTask, description: e.target.value });
          }}
          placeholder="Введите описание задачи..."
        ></PopNewCardArea>
      </PopNewCardBlock>
    </PopNewForm>
  );
};
