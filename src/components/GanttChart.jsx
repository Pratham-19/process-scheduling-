import React from "react";

const GanttChart = (props) => {
  //   var time = 0;
  //   const [time, setTime] = useState(0);
  return (
    <>
      {props.id % 2 === 0 ? (
        <div className="static bg-[#b4ffa2] p-7 text-xl border">
          {props.name}
          {/* <div className="absolute -bottom-28 ">
            <h2>{time + props.timeQuantum * props.id}</h2>
          </div> */}
        </div>
      ) : (
        <div className="static bg-[#fff56d] p-7 text-xl">
          {props.name}
          {/* <div className="absolute -bottom-28">
            <h2>{time + props.timeQuantum * props.id}</h2>
          </div> */}
        </div>
      )}
    </>
  );
};

export default GanttChart;
