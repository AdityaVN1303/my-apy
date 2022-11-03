import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const [btnColor, setBtnColor] = useState('dark')
  const [alert, setAlert] = useState(null)

  var showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 1500 )
    
  }
 
  var toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      setBtnColor('dark')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode has Been Enabled", "warning")
      document.title = "Textutils - Light Mode"

    }
    else{
      setMode('dark')
      setBtnColor('light')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark Mode has Been Enabled", "success")
      document.title = "Textutils - Dark Mode"
    }
  }


  return (
    <>
    <Alert alert = {alert}/>
  <Navbar mode = {mode} btnColor = {btnColor} toggleMode = {toggleMode}/>
  <div className="container my-3">
        <Textform showAlert = {showAlert}/>
  </div>
  
  </>
  );
}

export default App;
