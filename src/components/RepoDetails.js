import React from "react";
import styled from "styled-components";
import Tab from "../components/common/Tab";

const DetailsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 2rem 1.5rem;
  height: calc(100vh - 4rem);
  width: calc(100vw - 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
  box-sizing: border-box;
  max-width: 600px;
  background: ${(props) => props.theme.accent.base};
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 2);
  color: ${(props) => props.theme.background.dark};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const RepoHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  overflow-wrap: anywhere;
  color: ${(props) => props.theme.background.base};
  margin: 0.5rem 0;
`;

const WrapperNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RepoContent = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  line-height: 1.8rem;
`;

const SubContent = styled.div`
  margin-left: 0.7rem;
  display: flex;
`;

const CloserButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 7px;
  padding: 0.5rem 0.8rem;
  color: white;
  transition: background-color 0.2s ease-in;
  background-color: #9c0000;
  &:hover {
    background-color: #ca0000;
  }
`;

export const RepoDetails = (props) => {
  const { repo, getRepo } = props;
  if (!repo.full_name) return null;
  return (
    <DetailsContainer>
      <DetailsWrapper>
        <WrapperNav>
          <CloserButton
            text={"Close"}
            onClick={() => {
              getRepo({});
            }}
          >
            Close
          </CloserButton>
        </WrapperNav>
        <RepoHeader>{repo.full_name}</RepoHeader>
        <RepoContent>{repo.description}</RepoContent>
        <RepoContent>Owner: {repo.owner.login}</RepoContent>
        <RepoContent>
          License: {repo.license ? repo.license.name : "None"}
        </RepoContent>
        <RepoContent>Open Issues: {repo.open_issues_count}</RepoContent>
        <RepoContent>Language: {repo.language}</RepoContent>
        <RepoContent>Permissions:</RepoContent>
        <SubContent>
          {Object.entries(repo.permissions).map(([key, value]) => (
            <Tab key={key} text={key} permvalue={value} />
          ))}
        </SubContent>
      </DetailsWrapper>
    </DetailsContainer>
  );
};
