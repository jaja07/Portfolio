//import logo from '../src/img/reshot-icon-github-NY46M9DGFU.svg';
import './App.css';
import {NavBar} from './components/Navbar/navbar';
//import Navbar from "./components/Navbar/navbar.js";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import {Banner} from "./components/Banner/banner";
import {Skills} from "./components/Skills/skills";
import { Social } from './components/Social/social';
//import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <NavBar />
    <Banner />
    {/*<Social />*/}
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    </ThemeProvider>
    </div>
  );
}

export default App;
