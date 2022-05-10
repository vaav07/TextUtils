import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light') //wheather dark mode is enabled or not

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = "#051729";
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>    
        {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
        {/* <Navbar /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
        </div>
    </>
  );
}

export default App;
