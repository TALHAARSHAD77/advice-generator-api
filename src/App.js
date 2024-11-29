import { fireEvent } from "@testing-library/react";
import { useState } from "react";

export default function App() {
  const [newadvice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{newadvice}</h1>
      <button onClick={getAdvice}>Click Me !</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return <p>You have read {props.count} no of advices</p>;
}
