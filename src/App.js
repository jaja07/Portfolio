import './App.css';
import {NavBar} from './components/Navbar/navbar';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import {Banner} from "./components/Banner/banner";
import {Skills} from "./components/Skills/skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectDetails from "./components/ProjectDetails";
import { useState} from "react";

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <div className="App">
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <NavBar />
    <Banner />
    {/*<Social />*/}
    <Skills />
    <Experience />
    <Projects openModal={openModal} setOpenModal={setOpenModal} />
    <Education />
    <Contact />
    <Footer />
    {openModal.state &&
    <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
    }
    </ThemeProvider>
    </div>
  );
}

export default App;
