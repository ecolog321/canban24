import { Children, useState } from "react";
import { Subtitle } from "../../../styles/shared";
import { PopBrowseStatus, StatusTheme, StatusThemes } from "./Status.styled";
import { statusList } from "../../../../lib/status";

export const Status = ({changedTask,setChangedTask, currentCard, isEdit }) => {

  const changeStatus=(e)=>{
    setChangedTask({status:e.target.value })
    console.log(changedTask)
  }

  return (
    <PopBrowseStatus>
      <Subtitle>Статус</Subtitle>
      <StatusThemes>
        {isEdit ? (
          statusList.map((status) => {
            return (
              <StatusTheme onClick={changeStatus} key={status} $isEdit={currentCard.status===status? false:true}>
                <label>
                  <input type="radio" name="status" value={status}></input>
                </label>
                {status}
              </StatusTheme>
            );
          })
        ) : (
          <StatusTheme $isEdit={isEdit}>
            <label>
              {currentCard?.status}
              <input
                type="radio"
                name="status"
                value={currentCard?.status}
              ></input>
            </label>
          </StatusTheme>
        )}
      </StatusThemes>
    </PopBrowseStatus>
  );
};
