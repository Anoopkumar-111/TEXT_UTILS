import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
// import About from "./components/About";
//imrs
import React, { useState } from 'react';

import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null)

  const [mode, setMode] = useState('light');//whether Dark mode is ON/OFF

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //if once selected primary then bodyclass becomes primary ...but we should be able to change this
  //this function will do it
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    // console.log(cls);
    document.body.classList.add('bg-'+cls)

    // below if else only for toggle
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert(" : Your selected Mode has been Enabled", "success")
      // document.title = "Text Utils (Dark)"

      // setInterval(() => {
      //   document.title = "Text Utils is Awesome !"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Download now !"
      // }, 1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" : Your selected Mode has been Enabled", "success")
      // document.title = "Text Utils (Light)"
    }

  }

  return (
    <>
    {/* Syntax change in React. Instead of switch, routes is used and component is declared in element. */}
      {/* <Router> */}

        {/* mode Nvabar component and just importing it */}
        {/* We want changes in navbar for using i in otherwebsite like for Gym we need AKGYm , AKCAR etc */}

        {/* SO we will make a variable */}
        {/* we will send it like parameter ->props */}
        {/* this prop will be accepted by function componen of Navbar */}

        {/* in navbar bottom we have type checking if passed number{3} then error in console */}
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}


        {/* SEE DEFAULT props & is required error {comment deafult} */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


<TextForm showAlert={showAlert} heading="Try TextUilts - Word Couter , Character Counter , Remove extra spaces , Sentence to Binary Code" mode={mode} />


        {/* <Routes>
          <Route exact path="/About" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUilts - Word Couter , Character Counter , Remove extra spaces" mode={mode} />}></Route>
        </Routes> */}

    {/* </Router> */}
    </>
  );
}

export default App;
