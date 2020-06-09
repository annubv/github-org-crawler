import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  border: none;
  cursor: pointer;
  border-radius: 7px;
  padding: 0.5rem 0.8rem;
  background-color: ${(props) => props.theme.primary.dark};
  color: white;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.primary.light};
  }
`;

const CloseButtonWrapper = styled(ButtonWrapper)`
  background-color: #9c0000;
  &:hover {
    background-color: #ca0000;
  }
`;

const Button = (props) => {
  let { text } = props;
  return <ButtonWrapper>{text}</ButtonWrapper>;
};

export const CloseButton = (props) => {
  let { text } = props;
  return <CloseButtonWrapper>{text}</CloseButtonWrapper>;
};

export default Button;
