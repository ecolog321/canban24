import {
  Categories,
  CategoriesTheme,
  CategoriesThemes,
} from "../../../styles/shared";

export const PopNewCardCategories = ({ newTask, setNewTask }) => {
  return (
    <Categories>
      <p>Категории</p>
      <CategoriesThemes>
        <CategoriesTheme>
          <label htmlFor="">
            Web Design
            <input
              onChange={(e) => {
                setNewTask({ ...newTask, topic: e.target.value });
              }}
              type="radio"
              name=""
              value="Web Design"
            />
          </label>
        </CategoriesTheme>
        <CategoriesTheme>
          {" "}
          <label htmlFor="">
            Copywriting
            <input
              onChange={(e) => {
                setNewTask({ ...newTask, topic: e.target.value });
              }}
              type="radio"
              name=""
              value="Copywriting"
            />
          </label>
        </CategoriesTheme>

        <CategoriesTheme>
          {" "}
          <label htmlFor="">
            Research
            <input
              onChange={(e) => {
                setNewTask({ ...newTask, topic: e.target.value });
              }}
              type="radio"
              name=""
              value="Research"
            />
          </label>
        </CategoriesTheme>
      </CategoriesThemes>
    </Categories>
  );
};
