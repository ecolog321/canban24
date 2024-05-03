import { createContext, useEffect, useState } from "react";
import { getTasks } from "../../api";

export const TasksContext = createContext([]);

export const TasksProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("user")).token;
  const [tasks, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTasks(userToken)
      .then((data) => {
        setTaskList(data.tasks);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, isLoading, setTaskList }}>
      {children}
    </TasksContext.Provider>
  );
};
