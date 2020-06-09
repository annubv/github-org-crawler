import React from "react";
import styled from "styled-components";
import { RepoItem } from "./RepoItem";

const RepoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const RepoList = (props) => {
  let { repos } = props;

  return (
    <RepoListWrapper>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </RepoListWrapper>
  );
};
