import { useState } from "react";
import { Subtitle } from "../../../styles/shared";
import { PopBrowseStatus, StatusTheme, StatusThemes } from "./Status.styled";
import { statusList } from "../../../../lib/status";

export const Status = ({ currentCard, isEdit }) => {
  return (
    <PopBrowseStatus>
      <Subtitle>Статус</Subtitle>
      <StatusThemes>
        {isEdit ? (
          statusList.map((status) => {
            return (
              <StatusTheme key={status} $isEdit={isEdit}>
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
