import React, { useState, useEffect } from "react";
import "./reset.css";
import axios from "axios";

import { Header } from "./components/Header";
import { RepoList } from "./components/RepoList";

const App = () => {
  useEffect(() => {
    getRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [repos, setRepos] = useState([]);

  const getRepos = async () => {
    try {
      const res = await axios.get(
        "https://api.github.com/orgs/octokit/repos?page=1&per_page=10"
      );
      console.log(res);
      setRepos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <RepoList repos={repos} />
    </>
  );
};

export default App;
