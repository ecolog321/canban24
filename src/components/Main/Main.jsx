import { Column } from "../Column/Column";
import { GlobalStyle } from "../styles/Global.styled";
import { Container } from "../styles/shared";
import { MainContent, MainB, MainBlock } from "./Main.styled";

export const Main = ({ cards, isLoading, error }) => {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

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
                      taskList={cards.filter((card) => card.status === status)}
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
