import { css, styled } from "styled-components";

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

export const Btn=styled.button`
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
  text-align:center;
  padding-top:5px;

  & a {
    color: #ffffff;
  }

  ${Hover01}
`

export const Subtitle=css`
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

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const OtherMounth = css`
  opacity: 0;
`;
