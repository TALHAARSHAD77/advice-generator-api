import { fireEvent } from "@testing-library/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [newadvice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const getAdvice = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      console.log(res.data);
      setAdvice(res.data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Failed to get advise");
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div class="card">
      <div class="content">
        <h1>ADVICE{count}</h1>
        <p>{newadvice}</p>
      </div>
      <div class="pattern-divider">
        <img
          class="p-divider"
          src="./pattern-divider-desktop.svg"
          alt="pattern divider"
        />

        <div class="icon-dice" onClick={getAdvice}>
          <img src="./icon-dice.svg" alt="icon of dice" />
        </div>
      </div>
    </div>
  );
}

// function Message(props) {
//   return <p>You have read {props.count} no of advices</p>;
// }
