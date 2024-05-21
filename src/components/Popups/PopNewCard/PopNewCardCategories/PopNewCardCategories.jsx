import { useState } from "react";
import {
  Categories,
  CategoriesTheme,
  CategoriesThemes,
} from "../../../styles/shared";

export const PopNewCardCategories = ({ newTask, setNewTask }) => {

  const [categoria, setCategoria]=useState();

  const handleChangeCat = (e) => {
    setNewTask({ ...newTask, topic: e.target.value });
  };

  const handleCheckCat=(e)=>{
    setCategoria(e.target.value)
  }

  return (
    <Categories>
      <p>Категории</p>
      <CategoriesThemes>
        <CategoriesTheme onClick={handleCheckCat} $color={"W"}>
          <label onClick={handleChangeCat} value="Web Design">
          Web Design
          <input
            onChange={(e) => {
              setNewTask({ ...newTask, topic: e.target.value });
            }}
            type="radio"
            name="categories"
            value="Web Design"
          />
          </label>
        </CategoriesTheme>
        <CategoriesTheme $color={"C"}>
          <label onClick={handleChangeCat} value="Copywriting">
            Copywriting
            <input
              onChange={(e) => {
                setNewTask({ ...newTask, topic: e.target.value });
              }}
              type="radio"
              name="categories"
              value="Copywriting"
            />
          </label>
        </CategoriesTheme>

        <CategoriesTheme $color={"R"}>
          <label onClick={handleChangeCat} value="Research">
            Research
            <input
              onChange={(e) => {
                setNewTask({ ...newTask, topic: e.target.value });
              }}
              type="radio"
              name="categories"
              value="Research"
            />
          </label>
        </CategoriesTheme>
      </CategoriesThemes>
    </Categories>
  );
};
