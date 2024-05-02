import { Column } from "../Column/Column";
import { GlobalStyle } from "../styles/Global.styled";
import { Container } from "../styles/shared";
import { MainContent, MainB, MainBlock } from "./Main.styled";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context/hooks/useUser";
import { useTasks } from "../../context/hooks/useTasks";

export const Main = () => {
  const { user } = useUserContext();
  const { tasks } = useTasks();
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  return (
    <>
      <GlobalStyle />
      <MainB>
        <Container>
          <MainBlock>
            <MainContent>
              {isLoading ? (
                <p>Идет загрузка</p>
              ) : (
                <>
                  {statusList.map((status, index) => (
                    <Column
                      key={index}
                      title={status}
                      taskList={tasks.filter((task) => task.status === status)}
                    />
                  ))}
                </>
              )}
              {error ? <h2 style={{ color: "red" }}>{error}</h2> : <></>}
            </MainContent>
          </MainBlock>
        </Container>
      </MainB>
    </>
  );
};
