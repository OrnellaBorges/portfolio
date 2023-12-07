import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//IMPORT COMPONENTS
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

//#MINI-Projets
//import TicTacToe from "./components/MiniProjet/TicTacToe/TicTacToe";
//import InvestCalculator from "./components/MiniProjet/InvestCalculator/InvestCalculator";

function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
