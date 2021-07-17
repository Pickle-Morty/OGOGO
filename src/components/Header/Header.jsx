import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Styles from "./Header.module.css";
import Logo from "../../assets/images/logo.svg";
import { LINKS } from "../../constains";

export const Header = ({ routers }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  const routerRedirect = (e, i) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({
        top: routers[i].current.offsetTop,
        behavior: "smooth",
      });
    } else {
      history.push("/");
    }
  };
  return (
    <header className={Styles.header}>
      <div className="container">
        <div className={Styles.block}>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
          <nav className={`${Styles.menu} ${open ? Styles.active : ""}`}>
            <ul>
              {LINKS.map(({ label, target }, i) => {
                return (
                  <li key={i} className={Styles.item} onClick={() => setOpen(false)}>
                    {label === "Курсы" ? (
                      <NavLink to={target}>{label}</NavLink>
                    ) : (
                      <a
                        href={target}
                        onClick={(e) => routerRedirect(e, i)}
                        className={Styles.link}
                      >
                        {label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${Styles.hamburger} ${open ? Styles.active : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span className={Styles.line}></span>
            <span className={Styles.line}></span>
            <span className={Styles.line}></span>
          </div>
        </div>
      </div>
    </header>
  );
};
