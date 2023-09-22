import React from "react";
import style from "./Home.module.css";
import Text from "../Text";
import Container from "../Layout/Container";
import { Ctab } from "../Button";

const HeroBg = () => {
  return (
    <div className={style.HeroBg}>
      <Container>
        <div className={style.top__left__glow}></div>
        <div className={style.top__right__glow}></div>
        <div className={style.hero__image__ctn}>
          <div className={style.globe__thingy}></div>
          <div className={style.person__thingy}></div>
        </div>
        <h1>
          getlinkedTech <br /> Hackathon
          <Text variant="accent">1.0</Text>
        </h1>
        <p>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <Ctab onClick={() => console.log("Reg button clicked")}>Register</Ctab>
      </Container>
    </div>
  );
};

export default HeroBg;
