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

export const PopupBrowse = ({ cardID, $display }) => {
  const { tasks } = useTasks();

  const currentTask=tasks.map((task)=> { 
    if (task._id===cardID) {
      currentTask=task;
      console.log(currentTask)
    }
   });



  return (
    <PopBrowse $display={$display}>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <TopBlock cardID={cardID} />
            <Status />
            <Wrap />
            <ThemeCategories />
            <PopBtnBrowse cardID={cardID} />
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
};
