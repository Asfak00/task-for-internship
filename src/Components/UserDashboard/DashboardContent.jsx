import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import CompletedTask from "./Task/CompletedTask";
import IncompletedTask from "./Task/IncompletedTask";
import AllTask from "./Task/AllTask";
import TaskSubnav from "./TaskSubnav";

const DashboardContent = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="w-full ">
      <DashboardNav active={active} setActive={setActive} />
      <TaskSubnav />

      {active === 1 && (
        <>
          <AllTask />
        </>
      )}

      {active === 2 && (
        <>
          <CompletedTask />
        </>
      )}

      {active === 3 && (
        <>
          <IncompletedTask />
        </>
      )}
    </div>
  );
};

export default DashboardContent;
