import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "gray",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "white",
    "black",
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setColor(color)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
                style={{ backgroundColor: color }}
              >
                {color}
              </button>
            ))}
            {/* <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor("Olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("Gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("Pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
             */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
