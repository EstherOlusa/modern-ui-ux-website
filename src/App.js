import React from "react";
import { Brand, CallToAction, NavBar } from "./components";
import {
  Footer,
  Blog,
  Header,
  Features,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./main.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />{" "}
    </div>
  );
};

export default App;
