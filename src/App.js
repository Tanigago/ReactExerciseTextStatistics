import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import CountLetter from './components/componentLetter/componentLetter';
import CounterWord from './components/componentWords/componentWord';

function App() {

  const [text, setText] = useState("");

  function changeTextHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  useEffect(
    () => {
      console.log("Valor guardado en State:", text);
    },
    [text]
  )

  return (
    <>
      <h1>Escribe lo que te plazca</h1>
      <textarea onChange={changeTextHandler} value={text} />
      <CountLetter text={text} />
      <CounterWord text={text} />
    </>
  );
}

export default App
