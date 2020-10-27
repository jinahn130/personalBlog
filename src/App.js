import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './containers/Contact';
import Post from './containers/Post';
import Resume from './containers/Resume';
import Project from './containers/Project';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/project" exact component={Project} />
        <Route path="/contact"  component={Contact}/>
        <Route path="/post/:slug" component={Post} />

        
      </div>
    </Router>
    
  );
}

export default App;
