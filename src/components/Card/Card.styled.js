import styled from "styled-components";
import { topicStyles } from "../../lib/topic";

export const Theme = styled.div`
  width: auto;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $color }) => topicStyles[$color]?.backgroundColor || "e9d4fa"};
`;

export const TitleTheme = styled.p`
  color: ${({$color}) => topicStyles[$color]?.color || ""};
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardsItem=styled.div`
padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsC=styled.div`
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup=styled.div`
 width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent =styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardBtn=styled.div`
 width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  & div{
    width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
  }
`;

export const CardsTitle=styled.h3`
 font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate=styled.div`
 display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg{
    width: 13px;
  }

  & p {
    margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
  }
`
