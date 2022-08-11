import { useState } from 'react'
import './App.css';

import Division from './componets/division/division';
import Addition from './componets/addition/addition';
import Multiplication from './componets/multiplication/multiplicaiton';
import SideBar from './componets/sidebar/sidebar';

function App() {
  const [ index, setIndex ] = useState(0)

  const options = [
    {title: "Division", body: <Division/>},
    {title: "Multiplication", body: <Multiplication/>},
    {title: "Addition", body: <Addition/>},
  ]

  return (
    <div className="App">
      <SideBar options={options} currentIndex={index} setIndex={setIndex}/>
      {options[index].body}
    </div>
  );
}

export default App;
