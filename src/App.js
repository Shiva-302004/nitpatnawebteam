
import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import AOS from "aos"
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <div className="App   overflow-hidden" style={{overflowX:"hidden",Height:"100vh",background:"white"}}>
      <Home></Home>
      
    </div>
  );
}

export default App;
