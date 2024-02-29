import { SocialIcons } from "./../components/SocialIcons";
import { MainHeader } from "../components/MainHeader";
import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
// import useSWR from 'swr'

import NavBar from "../components/NavBar";
import styles from "../styles/mainheader.module.scss";
import IconsComponent from "../components/IconsComponent";
import BreakComponent from "../components/BreakComponent";
import ProjectsComponent from "../components/projects/ProjectsComponent";
import MessageComponent from "../components/message/MessageComponent";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  const parentRef = useRef(null);

  const scrollFunction = () => {
    /*  @ts-ignore */
    parentRef.current.scrollIntoView();
  };

  // const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())
  // const { data } = useSWR('/api/spotify', fetcher)
  // console.log(data)

  return (
    <>
      <main className={styles.header_container}>
        <NavBar />
        <MainHeader />
        <SocialIcons scrollFunction={scrollFunction} />
        <BreakComponent marginTop="4rem" />
        <IconsComponent />
        <ProjectsComponent />
        <BreakComponent marginTop="2rem" />
        <MessageComponent ref={parentRef} />

        <Footer />
      </main>
    </>
  );
};

export default Home;
