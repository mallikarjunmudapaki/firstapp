// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert  from "./components/Alert";
import About  from "./components/About";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,

  Link,
} from "react-router-dom";



function App() {
  

  const [mode,setMode]= useState('light')
 const [alert, setAlert]= useState(null)
 const showAlert =(message,type)=>{
  setAlert({
     message: message,
     type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);

 }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='grey'
      document.getElementById("label").innerHTML='Light Mode'
      showAlert(" Dark mode has been enabled", "success")
     

      
    }else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      document.getElementById("label").innerHTML='Dark Mode'
      showAlert(" Light mode has been enabled", "success")
   
    }
  }
  return (
    <>
    <Router>
      <Link> </Link>
      <Navbar title="TextUtils" Abouttext="About"  mode={mode} toggleMode={toggleMode}  />
      <Alert alert ={alert}/>
     
      <div className="container">
      
      <Routes>
          
        <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
  
        
      </div>
      </Router>
    </>
  );
}

export default App;
