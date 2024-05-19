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

export const PopupBrowse = ({ cardID, $display }) => {
  const { tasks } = useTasks();
  const [currentCard, setCurrentCard] = useState();
  const [selected, setSelected] = useState();
  const [isEdit, setIsEdit]=useState(false);

  useEffect(() => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i]._id === cardID) {
        setCurrentCard(tasks[i]);
      }
    }
  },[tasks]);

  useEffect (()=>{
    setSelected(currentCard?.date)
  },[<PopBrowse></PopBrowse>])

  const handleEditCard=()=>{
    setIsEdit(!isEdit);
  }

  return (
    <PopBrowse $display={$display}>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <TopBlock currentCard={currentCard} />
            <Status currentCard={currentCard} isEdit={isEdit}/>
            <Wrap isEdit={isEdit} currentCard={currentCard} selected={selected} setSelected={setSelected} />
            <PopBtnBrowse cardID={cardID} handleEditCard={handleEditCard} isEdit={isEdit}/>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
};
