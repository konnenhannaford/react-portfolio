// is this just the react logo
// import logo from './logo.svg';
// do i want the css here?
import './App.css';
import React from "react";
import {BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
// how to call in a strcuure of file?
// import BucketList from './components/BucketList';

// how i have my protfolio structured
import Contact from "./components/portfolio files/Contact";
import Resume from "./components/portfolio files/Resume";
import Home from "./components/portfolio files/Home";

// how tute has it structured
// import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from './components/portfolio files/Portfolio'
import Navigation from "./components/Navigation";


// DO I WANT IT LIKE THIS?
    // // tute has it as
        //   // export default function App() {

    // // class has it as 

    function App() {
      return (
        <Router>
          <Header/>
          <Navigation/>
            <Routes>
            {/* <Route index element={<Home/>}/> */}
            <Route path="/" element={<Home/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="contact" element={<Contact/>}/> 
            <Route path="resume" element={<Resume/>}/> 
            </Routes>
          <Footer/>
        </Router>
      );
    }



  

export default App;
