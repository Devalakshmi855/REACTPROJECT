import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyComponent from './components/MyComponent';
import ThreeColumnFeatures from './components/ThreeColumnFeatures';
import SecurityFeatures from './components/SecurityFeatures';


const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <MyComponent />
        <br></br><br></br>
        <Projects />
        <br></br>
        <ThreeColumnFeatures />
        <br></br>
        <SecurityFeatures />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
