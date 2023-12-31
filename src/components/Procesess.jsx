import React, { useState } from "react";
import Process from "./Process";
import axios from "axios";
import Calculation from "./Calculation";
const Processes = (props) => {
  let process = [];
  let burst_time = [];
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  for (let i = 0; i < props.inputProcess; i++) {
    process.push(i);
    burst_time.push(i);
  }
  const handleSubmit = async () => {
    setLoading(true)
    await axios
      .post("https://scheduling-backend.onrender.com/process/calculation-arrival-same", {
        processes: process,
        burstTime: burst_time,
      })
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setShow(true);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setShow(false);
      });
  };
  return (
    <div className="flex flex-col ">
      {
        loading && <h2 className="text-center text-xl">Loading...</h2>
      }
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
