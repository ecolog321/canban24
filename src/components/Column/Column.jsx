import { Card } from "../Card/Card";
import { Cards,ColumnMain, ColumnTitle } from "./Column.styled";

export const Column = ({ title, taskList }) => {
  return (
    <ColumnMain>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {taskList.map((task) => (
          <Card key={task._id} {...task} />
        ))}
      </Cards>
    </ColumnMain>
  );
};
