import React, { useState } from "react";
import Process from "./Process";
import axios from "axios";
const Processes = (props) => {
  let process = [];
  let burst_time = [];
  const [timeQuantum, setTimeQuantum] = useState(0);
  for (let i = 0; i < props.inputProcess; i++) {
    process.push(i);
    burst_time.push(i);
  }
  const handleSubmit = async () => {
    const tm = await axios
      .post("http://localhost:3050/process/time-quantum", {
        burstTime: burst_time,
      })
      .then((response) => {
        console.log(response.data);
        setTimeQuantum(response.data.timeQuantum);
      })
      .catch((error) => {
        console.log(error);
      });
    const cal = await axios
      .post("http://localhost:3050/process/calculation-arrival-same", {
        processes: process,
        burstTime: burst_time,
        timeQuantum: timeQuantum,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col  border">
      <div className="flex text-2xl justify-center">
        <h2 className="m-2">Process</h2>
        {/* <h2 className="m-2  ml-6">Arrival Time</h2> */}
        <h2 className="ml-5">Burst Time</h2>
      </div>
      {process.map((p) => (
        <Process key={p} id={p} bt={burst_time} process={process} />
      ))}
      <button
        className="p-2 bg-[#eded75] w-[100px] rounded-lg mx-auto"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Processes;
