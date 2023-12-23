import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'animate.css';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Home/>
        <Skills/>
        <Projects/>
        <About/>
        {/* <Contact/> */}
        <Footer/>
      </div>
    </Router>
    </div>
  );
}

export default App;
