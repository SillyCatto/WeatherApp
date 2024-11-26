import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>My first React App</p>
        <MyButton></MyButton>
        <MyButton></MyButton>
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


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);