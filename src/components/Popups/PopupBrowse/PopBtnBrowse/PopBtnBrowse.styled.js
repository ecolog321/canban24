import styled from "styled-components";
import { Hover01, Hover03 } from "../../../styles/shared";

export const BtnsBrowse=styled.div`
   width: 100%;
    height: 40px;

`

export const BtnGroup=styled.div`
  width: 100%;
  margin-right: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  
`

export const ButtonBor=styled.button`

  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;

  ${Hover03}
`

export const ButtonClose=styled.button`

  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;

  ${Hover01}
`