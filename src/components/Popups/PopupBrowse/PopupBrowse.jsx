
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
            <PopBtnBrowse cardID={cardID} />
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
};
