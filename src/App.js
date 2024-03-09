import './App.css';
import { useState } from 'react';
import Temperature from './components/Temperature';


function App() {
const [number, setNumber] = useState(9);
const [mycolor, setColor] = useState("temperature");

  return (
    <>
      <Temperature number = {number} setNumber = {setNumber} mycolor = {mycolor} setColor = {setColor} />
    </>
  )
  }



export default App;
