import React from "react";
import Task from "./Task";

const AllTask = () => {
  return (
    <>
      <main className="grid grid-cols-1 800px:grid-cols-2 w-full px-2 800px:px-32 gap-4">
        <Task />
      </main>
    </>
  );
};

export default AllTask;
