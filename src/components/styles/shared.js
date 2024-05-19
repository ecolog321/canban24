import { css, styled } from "styled-components";
import { topicStyles } from "../../lib/topic";

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;
export const Hover02 = css`
  &:hover {
    color: #33399b;
  }
`;
export const Hover03 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Btn = styled.button`
  width: 178px;
  height: 40px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;

  & a {
    color: #ffffff;
  }

  ${Hover01}
`;

export const Subtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const ContainerCard = styled.div`
  display: flex;
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 px;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  & p {
    margin-bottom: 14px;
  }
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 5px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.8;
  background: ${({ $color }) =>
    topicStyles[$color]?.backgroundColor || "e9d4fa"};
  color: ${({ $color }) => topicStyles[$color]?.color || ""};

  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

  & input {
    display: none;
  }
`;
