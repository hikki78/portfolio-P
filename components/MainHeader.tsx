/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/mainheader.module.scss";
import GifHolders from "./GifHolders";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

export function MainHeader() {
  const [hover, setHover] = React.useState(false);
  const { theme } = useTheme();

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  function scrollFunction(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <img id="bg1" src="/blob_bg.webp" alt="background" />
        <h1>
          <span
            style={{
              display: "block",
            }}
          >
            Hi👋,{" "}
          </span>
          <span
            style={{
              display: "inline-block",
            }}
          >
            I&rsquo;m
          </span>{" "}
          <span
            style={{
              display: "inline-block",
              cursor: "pointer",
            }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <RoughNotation
              type="underline"
              show={true}
              strokeWidth={2}
              color={"tomato"}
              iterations={2}
              animationDelay={500}
            >
              Meghadri
            </RoughNotation>
          </span>
          <span
            style={{
              display: "inline-block",
              color: "tomato",
            }}
          >
            .
          </span>
          <span
            style={{
              display: "inline-block",
            }}
          >
            {hover ? <span>🫡</span> : ""}
          </span>
        </h1>
        <h2>
          I&rsquo;m your laid-back{" "}
          <RoughNotation
            type="underline"
            show={true}
            animationDelay={1500}
            color={theme === "light" ? "blue" : "lightblue"}
            strokeWidth={2}
          >
            <span style={{ fontWeight: "500" }}>fullstack developer💻,</span>
          </RoughNotation>
          <span style={{ fontWeight: "500" }}>
            {" "}
            on a constant quest for tech brilliance. This site is your gateway
            to my latest projects & musings, or you can say a window to my geeky
            world.😉
          </span>
          <br></br>
          <span style={{ fontWeight: "500" }}>
            Let&rsquo;s connect and explore the boundless possibilities of tech
            together. 🚀💼
          </span>
        </h2>
      </div>
      <div
        className={`${styles.header__gifcontainer} flex items-center justify-center`}
      >
        <div className={styles.header__gif}>
          <GifHolders />
        </div>
      </div>
    </header>
  );
}
