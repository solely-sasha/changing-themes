import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Main() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`main ${theme}`}>
      <h1>click the button to toggle light and dark mode!</h1>

      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </main>
  );
}
