import reactLogo from "./assets/react.svg";
import { increaseCount } from "./store/reducers/counter";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-8">
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="animate-spin" alt="React logo" />
      </div>
      <h1 className="text-2xl">Vite + React</h1>
      <div className="flex flex-col items-center gap-4">
        <button
          className="rounded-lg border-1 bg-amber-300 p-4"
          onClick={() => dispatch(increaseCount())}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
