import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

class App extends Component {
  render() {
    return (
     <div>
        <Home />
        <About />
        <Tools />
        <Blog />
        <Contact />
        <Footer />
     </div>
    );
  }
}

export default App;
