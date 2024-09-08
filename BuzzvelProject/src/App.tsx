import { useContext, useEffect } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import "./styles/globalStyles.scss";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Timeline />
    </div>
  );
}

export default App;
