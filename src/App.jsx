import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Processes from "./components/Procesess";
const App = () => {
  const [inputProcess, setInputProcess] = useState(0);

  const handleChange = (event) => {
    setInputProcess(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <section className="flex flex-col text-center">
        <label className="text-xl my-5">Enter number of processes</label>
        <input
          type="number"
          className="p-2 border-none outline-none bg-[#0000001c] rounded-md w-[20%] mx-auto"
          placeholder="Enter number of procesess"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        {inputProcess > 0 && (
          <h1 className="text-lg my-3">Number of processes: {inputProcess}</h1>
        )}
      </section>
      <Processes inputProcess={inputProcess} />
    </div>
  );
};

export default App;
