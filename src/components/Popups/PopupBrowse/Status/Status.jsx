import { Subtitle } from "../../../styles/shared";
import { PopBrowseStatus, StatusTheme, StatusThemes } from "./Status.styled";

export const Status = ({ currentCard }) => {
  return (
    <PopBrowseStatus>
      <Subtitle>Статус</Subtitle>
      <StatusThemes>
        <StatusTheme>
          <p>Без статуса</p>
        </StatusTheme>
        <StatusTheme>
          <p>Нужно сделать</p>
        </StatusTheme>
        <StatusTheme>
          <p>В работе</p>
        </StatusTheme>
        <StatusTheme>
          <p>Тестирование</p>
        </StatusTheme>
        <StatusTheme>
          <p>Готово</p>
        </StatusTheme>
      </StatusThemes>
    </PopBrowseStatus>
  );
};
