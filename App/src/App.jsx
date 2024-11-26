import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { useState } from 'react';


const App = () => {
    return (
      <div>
      <div>
      <h1>Hello World!</h1>
      <p>Tic Tac Toe </p>
      <MyButton />
      <MyButton />
      </div>
      <Board />
      </div>
    );
};
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    console.log('clicked!');
  }
  return <button className="square"
   onClick = {handleClick} > 
    {value}
   </button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);