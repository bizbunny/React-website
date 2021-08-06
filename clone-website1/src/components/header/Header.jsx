/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.scss";
import { CSSTransition } from "react-transition-group";
import HideOnScroll from "./HideOnScroll";
export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
      <HideOnScroll>
          <header className="Header">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
            <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Art</a>
          <a href="/">About</a>
          <button><a href="/">See More</a></button>
        </nav> 
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🐸
      </button>
    </header>
      </HideOnScroll>
    
  );
}
