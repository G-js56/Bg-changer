import "./App.css";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");
  return (
    <div className="App">
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className=" bg-gray-300 fixed flex flex-wrap justify-center inset-x-0 text-pink-700 ">
          <div className="flex flex-wrap align-middle gap-2 shadow-lg bg-white px-3 py-2  my-2 m-1 rounded-3xl a">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 bg-red-700 rounded-3xl"
              style={{ color: "white" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 bg-blue-700 rounded-3xl"
              style={{ color: "white" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 bg-purple-700 rounded-3xl"
              style={{ color: "white" }}
            >
              purple
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 bg-orange-500 rounded-3xl"
              style={{ color: "white" }}
            >
              olive
            </button>
            <button
              onClick={(e) => setColor("gray")}
              className="outline-none px-4 bg-gray-700 rounded-3xl"
              style={{ color: "white" }}
            >
              gray
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 bg-yellow-700 rounded-3xl"
              style={{ color: "white" }}
            >
              yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 bg-pink-700 rounded-3xl"
              style={{ color: "white" }}
            >
              pink
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 bg-violet-200 rounded-3xl"
              style={{ color: "white" }}
            >
              lavender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
