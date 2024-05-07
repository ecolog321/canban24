import { CategoriesTheme } from "../../../styles/shared";
import { PopBrowseTopBlock, PopBrowseTtl } from "./TopBlock.styled";

export const TopBlock = ({ cardID }) => {
  return (
    <PopBrowseTopBlock>
      <PopBrowseTtl>{`Задача #${cardID}`}</PopBrowseTtl>
      <CategoriesTheme>Web Design</CategoriesTheme>
    </PopBrowseTopBlock>
  );
};
