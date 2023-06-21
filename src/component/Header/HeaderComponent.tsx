import React from "react";
import { styled } from "styled-components";
import { blockColor, textColor } from "../../theme";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  width: 80vw;
  height: 10vh;
  padding-left: 10vw !important;
  padding-right: 10vw !important;
  background-color: ${blockColor};
  color: ${textColor};
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${textColor};
  font-size: 4vh;
  line-height: 4vh;
`;

const HeaderComponent = () => {
  return (
    <HeaderDiv>
      <StyledLink to="/">Home</StyledLink>
    </HeaderDiv>
  );
};

export default HeaderComponent;
