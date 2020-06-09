import React from "react";
import styled from "styled-components";
import { RepoItem } from "./RepoItem";

const RepoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background.base};
  padding: 0 1rem;
  margin-bottom: 1.5rem;
`;

export const RepoList = (props) => {
  let { repos, getRepo } = props;

  return (
    <RepoListWrapper>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} getRepo={getRepo} />
      ))}
    </RepoListWrapper>
  );
};
