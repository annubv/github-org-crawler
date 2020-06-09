import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  padding: 1rem;
`;

const NavHeader = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

export const Header = () => {
  return (
    <Nav>
      <NavHeader>Github Crawler</NavHeader>
    </Nav>
  );
};
