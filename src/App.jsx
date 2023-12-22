import { React, useState } from "react";
import Layout from "./containers/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
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
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;