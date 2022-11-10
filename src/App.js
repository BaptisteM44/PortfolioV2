import './App.css';
import React, { Component }  from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import {useLayoutEffect} from 'react';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <div className="App">
        <Router>
          <Wrapper >
          <main className="mainPage">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDisplay />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
            </Routes>
          <Footer />
          </main>
          </Wrapper>
        </Router>
      
    </div>
  );
}

export default App;
