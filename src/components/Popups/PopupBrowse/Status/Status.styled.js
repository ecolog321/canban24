import styled from "styled-components";

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ $isEdit }) => $isEdit ? '#FFFF' : '#94A6BE'};
  color: ${({ $isEdit }) => $isEdit ? '#94A6BE' : '#FFFFFF'};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;

  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    cursor: pointer;
  }

  & label {
    cursor: pointer;
  }

  & input {
    display:none;
  }
`;
