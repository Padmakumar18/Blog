import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
