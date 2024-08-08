import { useEffect, useState } from "react";
import "./styles.css";
/**
 * create a counter app in which one counter will be move by 1 sec and another counter move by counter/2 seconds
 */
export default function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4>{counter}</h4>
      <h4>{counter / 2}</h4>
    </div>
  );
}
