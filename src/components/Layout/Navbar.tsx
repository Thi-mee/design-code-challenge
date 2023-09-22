import React from "react";
import style from "./Layout.module.css";
import Text from "../Text";
import { NavLink } from "react-router-dom";
import { Ctab } from "../Button";
import Container from "./Container";

function activeLinkClass({ isActive }: { isActive: boolean }) {
  return isActive ? style.active : "";
}

const Link = ({ children, ...props }: any) => {
  return (
    <NavLink {...props} className={activeLinkClass}>
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Container>
        <div className={style.nav__content}>
          <div className={style.nav__left}>
            <span className={style.logo}>
              get<Text variant="accent">linked</Text>
            </span>
          </div>
          <div className={style.nav__right}>
            <ul className={style.nav__links}>
              <li>
                <Link to="/"> Timeline </Link>
              </li>
              <li>
                <Link to="/"> Overview </Link>
              </li>
              <li>
                <Link to="/"> FAQs </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
            <Ctab onClick={() => console.log("heya")}>Register</Ctab>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
