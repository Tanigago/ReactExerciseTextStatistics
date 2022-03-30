import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import CountLetter from './components/componentLetter/componentLetter';

function App() {

  const [text, setText] = useState("");

  function changeTextHandler(event) {
    setText (event.target.value);
    console.log(text);
  }

  useEffect(
    ()=>{
      console.log("Valor guardado en State:", text);
    },
    [text]
  )

  return (
    <>
      <h1>Blablabla</h1>
      <textarea onChange={changeTextHandler} value={text}/>
      <CountLetter text=""/>
    </>    
  );
}

export default App;
