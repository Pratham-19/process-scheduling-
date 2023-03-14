import React from "react";
import GanttChart from "./GanttChart";
import TableVal from "./TableVal";
const Calculation = (props) => {
  return (
    <div className="flex flex-col  my-3">
      <h1 className="text-3xl my-3">Result</h1>
      <div className="flex w-full">
        <h2 className="mx-3 my-auto text-xl">Gantt Chart:</h2>
        {props.data.chart.map((x, i) => (
          <GanttChart key={i} name={x} id={i} timeQuantum={props.timeQuantum} />
        ))}
      </div>
      <div className="flex m-2 mt-5">
        <TableVal name="Processes" arr={props.processList} />
        <TableVal name="Burst Time" arr={props.burstTime} />
        <TableVal name="Turn Around Time" arr={props.data.turnAroundTime} />
        <TableVal name="Wating Time" arr={props.data.waitingTime} />
      </div>
      <h2 className="my-3 text-lg">Time quantum: {props.timeQuantum}</h2>
    </div>
  );
};

export default Calculation;
