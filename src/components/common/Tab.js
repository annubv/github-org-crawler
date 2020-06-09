import React from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  width: 3rem;
  border-radius: 3px;
  background-color: ${(props) => (props.permvalue ? "green" : "red")};
  color: white;
  margin: 0 0.2rem;
  padding: 0.3rem 0.5rem;
  font-weight: bold;
`;

const Tab = (props) => {
  let { text, permvalue } = props;
  return <TabWrapper permvalue={permvalue}>{text}</TabWrapper>;
};

export default Tab;
