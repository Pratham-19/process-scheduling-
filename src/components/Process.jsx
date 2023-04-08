import React from "react";

const Process = (props) => {
  const handleChange = (e) => {
    let i = e.target.name;
    let val = e.target.value;
    props.process[i] = "p" + i;
    props.bt[i] = val;
  };

  return (
    <section className="flex justify-center max-w-fit mx-auto">
      <h2 className="text-xl m-3 mr-5 text-center">{props.id}</h2>
      <input
        type="number"
        name={props.id}
        onChange={(e) => {
          handleChange(e);
        }}
        className="p-2 border-none outline-none bg-[#0000001c] m-2 rounded-md w-[16vw]"
        placeholder="Enter burst time (ms)"
      />
    </section>
  );
};

export default Process;
