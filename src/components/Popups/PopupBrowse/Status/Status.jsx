import { useState } from "react";
import { CommonInput, Subtitle } from "../../../styles/shared";
import { PopBrowseStatus, StatusTheme, StatusThemes } from "./Status.styled";
import { statusList } from "../../../../lib/status";

export const Status = ({
  setChangedTask,
  currentCard,
  isEdit,
}) => {
  return (
    <PopBrowseStatus>
      <Subtitle>Статус</Subtitle>
      <StatusThemes>
        {isEdit ? (
          statusList.map((status) => {
            return (
              <StatusTheme
                key={status}
                $isEdit={currentCard.status === status ? false : true}
              >
                <label>
                  {status}
                  <CommonInput
                    onClick={(e) => {
                      setChangedTask({status: e.target.value});
                    }}
                    type="radio"
                    name="status"
                    value={status}
                  ></CommonInput>
                </label>
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
