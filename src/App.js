import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import "./reset.css";
import "./style.css";

import { Header } from "./components/Header";
import { RepoList } from "./components/RepoList";
import { colors } from "./components/common/colors";
import { RepoDetails } from "./components/RepoDetails";

const App = () => {
  useEffect(() => {
    getRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [repos, setRepos] = useState([]);
  const [repo, setRepo] = useState({});

  const getRepo = (repoObj) => {
    setRepo(repoObj);
  };

  const getRepos = async () => {
    try {
      const res = await axios.get(
        "https://api.github.com/orgs/octokit/repos?page=1&per_page=10"
      );
      setRepos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ThemeProvider theme={colors}>
        <Header />
        <RepoDetails repo={repo} getRepo={getRepo} />
        <RepoList repos={repos} getRepo={getRepo} />
      </ThemeProvider>
    </>
  );
};

export default App;
