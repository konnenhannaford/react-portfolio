// is this just the react logo
import logo from './logo.svg';
// do i want the css here?
import './App.css';
import React from "react";
// how to call in a strcuure of file?
// import BucketList from './components/BucketList';

// how i have my protfolio structured
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import Landing from "./components/Landing";
// import Home from "./components/Home";

// how tute has it structured
// import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";


// DO I WANT IT LIKE THIS?
    // // tute has it as
        //   // export default function App() {

    // // class has it as 

    function App() {
      return (
        <>
        <Header/>
        <Footer/>
        </>
      );
    }

  

export default App;
