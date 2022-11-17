import './App.css';
import React from 'react';
import { gsap } from "gsap";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import ProjectDisplay from "./pages/ProjectDisplay";
import {useLayoutEffect} from 'react';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}
const comp = useRef(); // create a ref for the root level element (we'll use it later)

useLayoutEffect(() => {
  
  // -- ANIMATION CODE HERE --
  
  return () => { 
    // cleanup code (optional)
  }
  
}, []);

function App() {
  return (
    <div className="App">
        <Router>
          <Wrapper >
          <main className="mainPage">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDisplay />} />
            </Routes>
          
          </main>
          </Wrapper>
        </Router>
      
    </div>
  );
}

export default App;
