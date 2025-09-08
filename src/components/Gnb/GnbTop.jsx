import React from "react";
import styled from "styled-components";
import { SLink } from "../../styles/GlobalStyle";
import { ReactComponent as JordanIcon } from "../../assets/icons/jordan.svg";

const GnbTop = () => {
  return (
    <Container>
      <SLink to="/jordan">
        <JordanIcon width={24} height={24} />
      </SLink>
      <Buttons>
        <Button>Find a Store</Button>
        <Bar />
        <Button>Help</Button>
        <Bar />
        <Button>Join Us</Button>
        <Bar />
        <Button>Sign In</Button>
      </Buttons>
    </Container>
  );
};

export default GnbTop;

export const Container = styled.div`
  background-color: #f5f5f5;
  height: 36px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.ul`
  display: flex;
  align-items: center;
  decoration
`;

export const Button = styled.li`
  font-size: 12px;
  font-family: "Helvetica";
  font-weight: 500;
  cursor: pointer;
`;

export const Bar = styled.div`
  border-left: 1px solid black;
  height: 12px;
  margin: 12px;
`;
