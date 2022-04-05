import React from 'react'
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews'
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
