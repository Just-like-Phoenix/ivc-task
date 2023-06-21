import { styled } from "styled-components";
import { blockColor } from "../../theme";

export const HomePageDiv = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeDiv = styled.div`
  width: 80vw;
  height: calc(100% - 4vh);
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: ${blockColor};
`;

export const TableDiv = styled.div`
  width: calc(100% - 2vh);
  height: calc(100% - 2vh);
  margin: 1vh;
`;
