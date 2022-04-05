import React from 'react'
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews'
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';




function App() {
  return (
    <div className="App">

      {/* <Home></Home> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Reviews" element={<Reviews />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="NotFound" element={<NotFound />} />
      </Routes>

      {/* <Router>
        <Link to="/Home">Home</Link>


        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/Home">
            <Home></Home>
          </Route>

          <Route path="/Reviews">
            <Reviews></Reviews>
          </Route>

          <Route path="/Dashboard">
            <Dashboard></Dashboard>
          </Route>

          <Route path="/About">
            <About></About>
          </Route>

          <Route path="/Blogs">
            <Blogs></Blogs>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>


      </Router> */}




    </div>
  );
}

export default App;
