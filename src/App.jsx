import { useDispatch, useSelector } from "react-redux"; //useSelector utiliza para obtener los state del store y useDispatch para
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispash = useDispatch();

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Count is: {counter}</p>
      <div className="card">
        <button onClick={() => dispash(increment())}>Increment</button>
        <button onClick={() => dispash(decrement())}>Decrement</button>
        <button onClick={() => dispash(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
    </>
  );
}

export default App;
