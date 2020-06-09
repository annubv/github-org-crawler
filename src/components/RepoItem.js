import React from "react";
import styled from "styled-components";

const RepoItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.background.light};
  color: ${(props) => props.theme.text.base};
  padding: 1rem 1.5rem;
  border-radius: 6px;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease-in, box-shadow 0.2s ease-in;
  &:hover {
    background-color: #fffafa;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  }
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 6.5rem auto;
  text-align: left;
  padding: 0.5rem 0;
`;

const ItemHeading = styled.p`
  font-weight: bold;
`;

const Item = styled.p`
  overflow-wrap: anywhere;
`;

const ItemLink = styled.a`
  overflow-wrap: anywhere;
  text-decoration: none;
  font-weight: bold;
  color: #3a6b7c;
  outline: none;
  &:hover,
  &:focus {
    outline: none;
    color: #154a5c;
  }
`;

export const RepoItem = (props) => {
  let { repo } = props;
  return (
    <RepoItemWrapper>
      <ListItem>
        <ItemHeading>Name</ItemHeading>
        <Item>{repo.full_name}</Item>
      </ListItem>
      <ListItem>
        <ItemHeading>Open Issues</ItemHeading>
        <Item>{repo.open_issues_count}</Item>
      </ListItem>
      <ListItem>
        <ItemHeading>URL</ItemHeading>
        <ItemLink target="blank" href={repo.html_url}>
          {repo.html_url}
        </ItemLink>
      </ListItem>
      <ListItem>
        <ItemHeading>Language</ItemHeading>
        <Item>{repo.language}</Item>
      </ListItem>
    </RepoItemWrapper>
  );
};
