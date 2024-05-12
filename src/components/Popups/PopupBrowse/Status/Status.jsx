import { useState } from "react";
import { Subtitle } from "../../../styles/shared";
import { PopBrowseStatus, StatusTheme, StatusThemes } from "./Status.styled";

export const Status = ({ currentCard }) => {

  const [currentStatus, setCurrentStatus]=useState(currentCard?.status);

  const changeStatus=(e)=>{
    setCurrentStatus(e.target.value)
    console.log(currentStatus)
  }

  return (
    <PopBrowseStatus>
      <Subtitle>Статус</Subtitle>
      <StatusThemes>
        <StatusTheme value="Без статуса" onClick={changeStatus}>
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
