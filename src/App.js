import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./themeContext";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
