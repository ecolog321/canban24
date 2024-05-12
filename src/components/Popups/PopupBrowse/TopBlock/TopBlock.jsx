import { CategoriesTheme } from "../../../styles/shared";
import { PopBrowseTopBlock, PopBrowseTtl } from "./TopBlock.styled";

export const TopBlock = ({ currentCard}) => {
  return (
    <PopBrowseTopBlock>
      <PopBrowseTtl>{`Задача "${currentCard?.title}"`}</PopBrowseTtl>
      <CategoriesTheme>{currentCard?.topic}</CategoriesTheme>
    </PopBrowseTopBlock>
  );
};
