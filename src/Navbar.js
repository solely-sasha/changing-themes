import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
