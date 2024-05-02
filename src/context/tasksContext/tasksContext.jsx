import { createContext, useState } from "react";
import { getTasks } from "../../api";

export const TasksContext = createContext([]);


export const TasksProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("user")).token;
  console.log(userToken)
  const [tasks, setTaskList] = useState([]);

  
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

    const list=setTaskList("cgbcjr")

return (
  <TasksContext.Provider value={{tasks }}>
    {children}
  </TasksContext.Provider>
)
}
