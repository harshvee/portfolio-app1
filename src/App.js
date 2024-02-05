import NavBar from "./components/navBar/navBar";
import Intro from "./components/Intro/intro";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <About/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
