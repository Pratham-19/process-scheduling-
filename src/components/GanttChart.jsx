import React from "react";

const GanttChart = (props) => {
  return (
    <>
      {props.id === 0 ? (
        <div className="bg-[#b4ffa2] relative  p-8 text-xl ">
          {props.name}
          <div className="absolute -bottom-6 -right-1 text-base">
            <h2>{props.time}</h2>
          </div>
          <div className="absolute -bottom-6 left-0 text-base">
            <h2>0</h2>
          </div>
        </div>
      ) : (
        <div
          className={` ${
            props.id % 2 === 0 ? "bg-[#b4ffa2]" : "bg-[#fff56d]"
          }  relative  p-8 text-xl `}
        >
          {props.name}
          <div className="absolute -bottom-6 -right-1 text-base">
            <h2>{props.time}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default GanttChart;
