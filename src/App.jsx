import { React, useState } from "react";
import Background from "./containers/Background";
import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <Background bgColor = "#E0E1DA">
      <Navbar/>
    </Background>
  );
}

export default App;
