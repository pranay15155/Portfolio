import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills'
import Works from './components/Works/works';
import Contacts from './components/Contact/contact'
import Footer from  './components/Footer/footer'

function App() {
  return <div className="App">
    <Navbar></Navbar>
    <Intro></Intro>
    <Skills></Skills>
    <Works></Works>
    <Contacts></Contacts>
    <Footer></Footer>
  </div>;
}

export default App;
