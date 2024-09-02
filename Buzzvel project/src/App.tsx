import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import "./styles/globalStyles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
