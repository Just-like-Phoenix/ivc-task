import { styled } from "styled-components";
import { blockColor, textColor } from "../../theme";

export const UserPageDiv = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserDiv = styled.div`
  width: 80vw;
  height: calc(90vh - 4vh);
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: ${blockColor};
`;

export const UserInfoDiv = styled.div`
  width: calc(100% - 2vh);
  height: calc(40% - 1vh);
  margin-top: 1vh;
  margin-left: 1vh;
  margin-right: 1vh;
  display: flex;
`;

export const UserInfo = styled.div`
  width: calc(50% - (0.5vh));
  height: 100%;
  margin-right: 1vh;
`;

export const UserGeo = styled.div`
  width: calc(50% - (0.5vh));
  height: 100%;
  display: flex;
`;

export const UserTodoDiv = styled.div`
  width: calc(100% - 2vh);
  height: calc(60% - 2vh);
  margin: 1vh;
`;

export const InfoRow = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
`;

export const InfoCell = styled.div<{ $width?: number }>`
  width: ${(p) => p.$width}%;
  color: ${textColor};
  font-size: 1.2vw;
`;
