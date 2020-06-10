import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import "./reset.css";
import "./style.css";

import { Header } from "./components/Header";
import { RepoList } from "./components/RepoList";
import { colors } from "./components/common/colors";
import { RepoDetails } from "./components/RepoDetails";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [repo, setRepo] = useState({});
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getRepo = (repoObj) => {
    setRepo(repoObj);
  };

  //eslint-disable-next-line
  const getRepos = useCallback(async () => {
    if (hasMore) {
      let url = `https://api.github.com/orgs/${"octokit"}/repos?page=${page}&per_page=10&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CSECRET}`;
      try {
        const res = await axios.get(url);
        setRepos((state) => {
          return [...state, ...res.data];
        });
        setPage((state) => {
          return state + 1;
        });
        setHasMore(res.data.length > 0);
      } catch (err) {
        console.log(err);
      }
    }
  });

  const loader = useRef(getRepos);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );
  const [element, setElement] = useState(null);

  useEffect(() => {
    loader.current = getRepos;
  }, [getRepos]);
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <>
      <ThemeProvider theme={colors}>
        <Header />
        <RepoDetails repo={repo} getRepo={getRepo} />
        <RepoList repos={repos} getRepo={getRepo} />
        <div ref={setElement}></div>
      </ThemeProvider>
    </>
  );
};

export default App;
