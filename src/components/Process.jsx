import React from "react";

const Process = (props) => {
  const handleChange = (e) => {
    let i = e.target.name;
    let val = e.target.value;
    props.process[i] = "p" + i;
    props.bt[i] = val;
    console.log(props.bt, props.process);
  };

  return (
    <section className="flex justify-center">
      <h2 className="m-2 text-xl">{props.id}</h2>
      <input
        type="number"
        name={props.id}
        // value={props.bt[props.id]}
        onChange={(e) => {
          handleChange(e);
        }}
        className="p-2 border-none outline-none bg-[#0000001c] m-2 rounded-md"
        placeholder="Enter burst time"
      />
    </section>
  );
};

export default Process;
