import { React, useState } from "react";
import Background from "./containers/Background";
import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <Background bgColor = "#DE354C">
      <Navbar/>
    </Background>
  );
}

export default App;
