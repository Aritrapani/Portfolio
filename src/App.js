import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Skill from "./Components/Skills/Skill";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import BacktoTop from "./Components/BacktoTop/BacktoTop";
import Project from "./Components/Project/Project";
import Experience from "./Components/Experience/Experience";
import {useContext } from 'react';
import { ThemeContext } from "./Context";

function App() {

  const {state} = useContext(ThemeContext);

  return (
    <div className="App"
     style={{
         background : state.darkMode ? 'var(--black)' : '',
         color : state.darkMode ? 'white' : ''
     }}
    >
       <Navbar />
       <Intro />
       <Skill />
       <Project />
       <Experience />
       <ContactForm />
       <Footer />
       <BacktoTop darkMode={state.darkMode}/>
    </div>

  );
}

export default App;
