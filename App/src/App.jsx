import React, {useState} from "react";
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
  return <button className="square">1</button>;
}

export default function Board() {
  return(
  <>
  <div className="board-row">
    <button className="square">1</button>
    <button className="square">2</button>
    <button className="square">3</button>
  </div>
  <div classname="board-row">
  <button className="square">4</button>
  <button className="square">5</button>
  <button className="square">6</button>
  </div>
  <div className="board-row">
  <button className="square">7</button>
  <button className="square">8</button>
  <button className="square">9</button>
  </div>
  
  </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);