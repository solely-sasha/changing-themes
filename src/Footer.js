import React, { useContext } from "react";

import { ThemeContext } from "./themeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <p>Footer</p>
    </footer>
  );
}
