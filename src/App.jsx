import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Category2/>
    </div>
  );
};

export default App;
