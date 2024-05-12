import { Status } from "./Status/Status";
import { ThemeCategories } from "./ThemeCategories/ThemeCategories";
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

  useEffect(() => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i]._id === cardID) {
        setCurrentCard(tasks[i]);
      }
    }
    setSelected(currentCard?.date)
  }, []);

  console.log(selected)

  return (
    <PopBrowse $display={$display}>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <TopBlock currentCard={currentCard} />
            <Status />
            <Wrap currentCard={currentCard} selected={selected} setSelected={setSelected} />
            <ThemeCategories />
            <PopBtnBrowse cardID={cardID} />
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
};
