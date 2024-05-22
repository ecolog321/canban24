import { CategoriesTheme } from "../../../styles/shared";
import { PopBrowseTopBlock, PopBrowseTtl } from "./TopBlock.styled";

export const TopBlock = ({ currentCard}) => {
  return (
    <PopBrowseTopBlock>
      <PopBrowseTtl>{`Задача "${currentCard?.title}"`}</PopBrowseTtl>
      <CategoriesTheme $isCheck={true} $color={currentCard?.topic[0]}>{currentCard?.topic}</CategoriesTheme>
    </PopBrowseTopBlock>
  );
};
