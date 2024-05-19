import { useNavigate } from "react-router-dom";
import {
  BtnsBrowse,
  BtnGroup,
  ButtonBor,
  ButtonClose,
} from "./PopBtnBrowse.styled.js";
import { deleteTask} from "../../../../api.js";
import { useTasks } from "../../../../context/hooks/useTasks.js";
import { useUserContext } from "../../../../context/hooks/useUser.js";
import { useState } from "react";

export const PopBtnBrowse = ({ cardID, handleEditCard, isEdit, handleSaveCard }) => {
  const { setTaskList } = useTasks();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function handleDelete(event) {
    event.preventDefault();
    try {
      const tasksData = await deleteTask({ id: cardID, token: user.token });

      setTaskList(tasksData.tasks);
      navigate(-1);
    } catch (err) {
      setError(err.message);
    }
  }

  const closeBrowse = () => {
    navigate(-1);
  };

  return (
    <BtnsBrowse>
      {error ? <h2 style={{ color: "red" }}>{error}</h2> : <></>}
      <BtnGroup>
        {isEdit ? (
          <>
            <ButtonBor onClick={handleSaveCard}>Сохранить</ButtonBor>
            <ButtonBor onClick={handleEditCard}>Отменить</ButtonBor>
            <ButtonBor onClick={handleDelete}>Удалить</ButtonBor>
            <ButtonClose onClick={closeBrowse}>Закрыть</ButtonClose>
          </>
        ) : (
          <>
            <ButtonBor onClick={handleEditCard}>Редактировать</ButtonBor>
            <ButtonBor onClick={handleDelete}>Удалить</ButtonBor>
            <ButtonClose onClick={closeBrowse}>Закрыть</ButtonClose>{" "}
          </>
        )}
      </BtnGroup>
    </BtnsBrowse>
  );
};
