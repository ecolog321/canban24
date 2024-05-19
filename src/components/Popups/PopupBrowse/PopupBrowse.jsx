import { useNavigate } from "react-router-dom";
import { Status } from "./Status/Status";
import { TopBlock } from "./TopBlock/TopBlock";
import { Wrap } from "./Wrap/Wrap";
import {
  PopBrowse,
  PopBrowseBlock,
  PopBrowseContainer,
  PopBrowseContent,
} from "./PopupBrowse.styled";
import { PopBtnBrowse } from "./PopBtnBrowse/PopBtnBrowse";
import { useTasks } from "../../../context/hooks/useTasks";
import { useEffect, useState } from "react";
import { editTask } from "../../../api";

export const PopupBrowse = ({ cardID, $display }) => {
  const { tasks, isLoading } = useTasks();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [currentCard, setCurrentCard] = useState();
  const [selected, setSelected] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [changedTask, setChangedTask] = useState({
    description: "",
    status: "",
  });

  useEffect(() => {
    setCurrentCard(tasks.find((task) => task._id === cardID));
  }, [tasks]);

  useEffect(() => {
    setSelected(currentCard?.date);
  }, [<PopBrowse />]);

  function handleEditCard() {
    setIsEdit(!isEdit);
  }

  function handleCancel() {
    setCurrentCard();
  }

  async function handleSaveCard() {
    if (changedTask.description === "") {
      setError("Заполните описание");
      return;
    }
    const newTaskData = { ...changedTask, data: selected };

    try {
      const tasksData = await editTask({
        ...newTaskData,
        token: user?.token,
        id: currentCard?.id,
      });
      setTaskList(tasksData.tasks);
      navigate(0);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <PopBrowse $display={$display}>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            {isLoading ? (
              <h2>Идет загрузка</h2>
            ) : (
              <>
                <TopBlock currentCard={currentCard} />
                <Status currentCard={currentCard} isEdit={isEdit} />
                <Wrap
                  isEdit={isEdit}
                  currentCard={currentCard}
                  setCurrentCard={setCurrentCard}
                  setChangedTask={setChangedTask}
                  selected={selected}
                  setSelected={setSelected}
                />
                <PopBtnBrowse
                  cardID={cardID}
                  handleEditCard={handleEditCard}
                  isEdit={isEdit}
                  handleSaveCard={handleSaveCard}
                />
              </>
            )}
            {error ? <h2 style={{ color: "red" }}>{error}</h2> : <></>}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
};
