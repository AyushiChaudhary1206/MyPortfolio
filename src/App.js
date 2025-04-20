import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";


import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import Contact from "./components/Contact";

import ParticlesComponent from "./components/Particlesbg";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
  
    <BrowserRouter>
    <Navbar/>
    <ParticlesComponent/>
    <Routes>
          <Route path="/" element={  <Home/>} />
          <Route path="/about" element={<About />} />
           <Route path="/skills" element={<Skills />} />
           <Route path="/work" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />  
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
