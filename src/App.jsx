import { React, useState } from "react";
import Background from "./containers/Background";
// import Palette from "./assets/Palette.jpg";
import Gradient from "./assets/Gradient.jpg";
import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <Background bgImg={Gradient} position="left" blur={["bl", "tr"]}>
      <Navbar/>
    </Background>
  );
}

export default App;
