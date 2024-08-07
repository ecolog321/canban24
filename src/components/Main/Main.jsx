import { Column } from "../Column/Column";
import { GlobalStyle } from "../styles/Global.styled";
import { Container } from "../styles/shared";
import { MainContent, MainB, MainBlock } from "./Main.styled";
import { useState } from "react";
import { useTasks } from "../../context/hooks/useTasks";
import { statusList } from "../../lib/status";

export const Main = () => {
  const { tasks, isLoading } = useTasks();
 

  const [error, setError] = useState(null);


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
