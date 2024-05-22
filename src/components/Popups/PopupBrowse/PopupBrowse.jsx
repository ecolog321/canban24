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
import { useUserContext } from "../../../context/hooks/useUser";
import Calendar from "../../Calendar/Calendar";

export const PopupBrowse = ({ cardID, $display }) => {
  const { tasks, setTaskList, isLoading } = useTasks();
  const { user } = useUserContext();
  const [error, setError] = useState(null);
  const [currentCard, setCurrentCard] = useState();
  const [selected, setSelected] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [changedTask, setChangedTask] = useState({
    status: "",
    description: "",
  });

  useEffect(() => {
    setCurrentCard(tasks.find((task) => task._id === cardID));
    setChangedTask({ ...currentCard});
  }, [tasks]);

  useEffect(() => {
    setSelected(isEdit ?selected : currentCard?.date);
    console.log(selected)
  }, [<Calendar/>]);

  function handleEditCard() {
    setIsEdit(!isEdit);
  }

  async function handleSaveCard() {
    setError(null);
    if ((currentCard.description === "") & (changedTask.description === "")) {
      setError("Заполните описание");
      return;
    }
    const newTaskData = { ...changedTask, date: selected };

    try {
      const tasksData = await editTask({
        ...newTaskData,
        token: user?.token,
        id: currentCard?._id,
      });
      setTaskList(tasksData.tasks);
      setIsEdit(!isEdit);
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
                <Status
                  changedTask={changedTask}
                  setChangedTask={setChangedTask}
                  currentCard={currentCard}
                  setCurrentCard={setCurrentCard}
                  isEdit={isEdit}
                />
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
