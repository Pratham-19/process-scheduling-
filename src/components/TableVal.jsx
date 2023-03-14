import React from "react";

const TableVal = (props) => {
  return (
    <section className="flex flex-col text-center border px-2">
      <h2 className="text-xl">{props.name}</h2>
      {props.arr.map((x) => (
        <h2 className="text-md my-2">{x}</h2>
      ))}
    </section>
  );
};

export default TableVal;
