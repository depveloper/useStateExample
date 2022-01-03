import { useState } from "react";
import "./styles.css";

export default function App(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Hello Developer !!</h1>
      <p>{JSON.stringify(this.state)}</p>
      <h2>{"count: " + counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>add</button>
    </div>
  );
}
