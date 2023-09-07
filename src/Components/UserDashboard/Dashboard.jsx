import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  return (
    <section className="w-full h-[100vh] bg-[#ECF0F9] max-w-[1200px] mx-auto flex">
      <div className="800px:w-[300px] w-[80px]">
        <DashboardSidebar />
      </div>
      <div className="w-[85%]">
        <DashboardContent />
      </div>
    </section>
  );
};

export default Dashboard;
