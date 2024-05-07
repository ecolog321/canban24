import { useContext } from "react";
import { TasksContext } from "../tasksContext/tasksContext";

export const useTasks = () => {
  return useContext(TasksContext);
};