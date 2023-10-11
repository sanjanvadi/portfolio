import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'animate.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
