import "../index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";


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
  return (
    <button
      className="square bg-gray-200 border border-gray-400 w-16 h-16 flex items-center justify-center text-xl font-bold"
      onClick={handleClick}
    >
      {value}
    </button>);
}

export default function Board() {
  return (
    <>
      <div className="flex flex-col gap-2" >
        <div className="board-row flex gap-2">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row flex gap-2">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row flex gap-2">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);