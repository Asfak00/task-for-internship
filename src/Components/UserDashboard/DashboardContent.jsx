import React, { useState } from "react";

// manually imported components
import DashboardNav from "./DashboardNav";
import CompletedTask from "./Task/CompletedTask";
import IncompletedTask from "./Task/IncompletedTask";
import AllTask from "./Task/AllTask";
import TaskSubnav from "./TaskSubnav";
import Notification from "./Notification";
import Search from "./Search";
import Account from "./Account";

const DashboardContent = ({ sidebarActive, setsidebarActive }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full">
      {sidebarActive === 1 && (
        <>
          <div className={`w-full `}>
            {active === 1 && (
              <>
                <DashboardNav active={active} setActive={setActive} />
                <TaskSubnav totalTask={6} />
                <AllTask />
              </>
            )}

            {active === 2 && (
              <>
                <DashboardNav active={active} setActive={setActive} />
                <TaskSubnav totalTask={0} />
                <CompletedTask />
              </>
            )}

            {active === 3 && (
              <>
                <DashboardNav active={active} setActive={setActive} />
                <TaskSubnav totalTask={6} />
                <IncompletedTask />
              </>
            )}
          </div>
        </>
      )}

      {sidebarActive === 2 && <Search />}
      {sidebarActive === 3 && <Notification />}
      {sidebarActive === 4 && <Account />}
    </div>
  );
};

export default DashboardContent;
