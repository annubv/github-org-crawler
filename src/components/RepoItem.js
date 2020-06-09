import React from "react";
import styled from "styled-components";

const RepoItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 2rem 0;
`;

export const RepoItem = (props) => {
  let { repo } = props;
  return (
    <RepoItemWrapper>
      <p>{repo.full_name}</p>
      <p>{repo.open_issues_count}</p>
      <p>{repo.html_url}</p>
      <p>{repo.language}</p>
    </RepoItemWrapper>
  );
};
