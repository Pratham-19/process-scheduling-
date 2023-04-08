import React, { useState } from "react";
import Process from "./Process";
import axios from "axios";
import Calculation from "./Calculation";
const Processes = (props) => {
  let process = [];
  let burst_time = [];
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  for (let i = 0; i < props.inputProcess; i++) {
    process.push(i);
    burst_time.push(i);
  }
  const handleSubmit = async () => {
    await axios
      .post("http://localhost:3050/process/calculation-arrival-same", {
        processes: process,
        burstTime: burst_time,
      })
      .then((response) => {
        setData(response.data);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setShow(false);
      });
  };
  return (
    <div className="flex flex-col ">
      <div className="flex text-xl min-w-fit mx-auto w-[24vw] ">
        <h2 className="my-2 mx-1 ">Process</h2>
        <h2 className="m-2">Burst Time (ms)</h2>
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
      {show && (
        <Calculation data={data} processList={process} burstTime={burst_time} />
      )}
    </div>
  );
};

export default Processes;
