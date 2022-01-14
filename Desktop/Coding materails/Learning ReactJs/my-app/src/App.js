import './App.css';
import Navbar from './components/Navbar';
import Convertor from './components/Convertor';
import React,{useState} from 'react';
function App() {
  const [mode, setmode] = useState('light')
    const switchmode = ()=>{
    if(mode==="dark"){
      setmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      document.getElementById("mybox").style.backgroundColor = "white";
    }
    else{
      setmode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    }
  }
  return (
    <>
    <Navbar slot="About" mode={mode}/>
    <Convertor mode={mode} func={switchmode}/>
    </>
  );
}
export default App;