import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen bg-gray-800 p-10">
      <Header />
      <TaskListNumber />
    </div>
  );
};

export default EmployeeDashboard;
