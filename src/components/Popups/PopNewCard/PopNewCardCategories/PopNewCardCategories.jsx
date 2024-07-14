import { useState } from "react";
import {
  Categories,
  CategoriesTheme,
  CategoriesThemes,
  CommonInput,
} from "../../../styles/shared";

export const PopNewCardCategories = ({ newTask, setNewTask }) => {
  const [isWeb, setIsWeb] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [isResearch, setIsResearch] = useState(false);

  return (
    <Categories>
      <p>Категории</p>
      <CategoriesThemes>
        <CategoriesTheme $isCheck={isWeb} $color={"W"}>
          <label>
            Web Design
            <CommonInput
              onClick={(e) => {
                setNewTask({ ...newTask, topic: e.target.value });
                setIsWeb(true);
                setIsCopy(false);
                setIsResearch(false);
              }}
              type="radio"
              name="categories"
              value="Web Design"
            ></CommonInput>
          </label>
        </CategoriesTheme>
        <CategoriesTheme $isCheck={isCopy} $color={"C"}>
          <label>
            Copywriting
            <CommonInput
              onClick={(e) => {
                setNewTask({ ...newTask, topic: e.target.value });
                setIsWeb(false);
                setIsCopy(true);
                setIsResearch(false);
              }}
              type="radio"
              name="categories"
              value="Copywriting"
            ></CommonInput>
          </label>
        </CategoriesTheme>

        <CategoriesTheme $isCheck={isResearch} $color={"R"}>
          <label>
            Research
            <CommonInput
              onClick={(e) => {
                setNewTask({ ...newTask, topic: e.target.value });
                setIsWeb(false);
                setIsCopy(false);
                setIsResearch(true);
              }}
              type="radio"
              name="categories"
              value="Research"
            ></CommonInput>
          </label>
        </CategoriesTheme>
      </CategoriesThemes>
    </Categories>
  );
};
