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
      <section>
        <h1>Processes</h1>
        <input
          type="number"
          className="p-2 border-none outline-none bg-[#0000001c]"
          placeholder="Enter number of procesess"
          onChange={(event) => {
            handleChange(event);
          }}
          value={inputProcess}
        />
        {inputProcess > 0 && <h1>Number of processes: {inputProcess}</h1>}
        <Processes inputProcess={inputProcess} />
      </section>
    </div>
  );
};

export default App;
