import { BtnBrowse } from "./BtnBrowse/BtnBrowse";
import { BtnEdit } from "./BtnEdit/BtnEdit";
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

export const PopupBrowse = ({ cardID, $display }) => {
  return (
    <PopBrowse $display={$display}>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <TopBlock cardID={cardID} />
            <Status />
            <Wrap />
            <ThemeCategories />
            <BtnBrowse />
            <BtnEdit />
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
};
