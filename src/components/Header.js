import React from "react";
import styled from "styled-components";
import octocat from "../assets/octocat.png";

const Nav = styled.nav`
  display: flex;
  padding: 2rem 1rem 1rem 1rem;
  justify-content: center;
  align-items: center;
  min-height: 3rem;
  background-color: ${(props) => props.theme.background.base};
  color: ${(props) => props.theme.text.base};
`;

const NavHeader = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;

const NavLogo = styled.img`
  max-height: 6rem;
  margin-right: 0.5rem;
  object-fit: cover;
`;

export const Header = (props) => {
  return (
    <Nav>
      <NavLogo src={octocat} alt="" />
      <NavHeader>Github Crawler</NavHeader>
    </Nav>
  );
};
