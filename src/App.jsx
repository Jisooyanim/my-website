import { React, useState } from "react";
import Layout from "./containers/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Personal from "./views/Personal";
import School from "./views/School";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route 
              path="/" 
              element={<Home />}  
          />
          <Route 
            path="/about" 
            element={<About />}  
          />
          <Route 
            path="/projects" 
            element={<Projects />}  
          />
          <Route 
            path="/projects/personal" 
            element={<Personal />}  
          />
          <Route 
            path="/projects/school" 
            element={<School />}  
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;