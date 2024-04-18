import { styled } from "styled-components";

export const Calendar = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  opacity: ${({ $opacity }) => ($opacity ? "100" : "0")};
  font-weight: ${({ $current }) => ($current ? "900" : "400")};
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;
