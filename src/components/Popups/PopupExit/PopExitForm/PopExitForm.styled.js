import styled from "styled-components";
import { Hover01, Hover03 } from "../../../styles/shared";

export const ExitForm=styled.form`

`

export const ExitFormGroup=styled.div`
 display: flex;
`

export const ExitBtnYes=styled.button`
 width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;
  ${Hover01}
`

export const ExitBtnNo=styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Hover03}
`