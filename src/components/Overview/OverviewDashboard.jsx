import React from "react";
import Header from "./Header/Header";
import OverviewContent from "./Content/OverviewContent";

const OverviewDashboard = () => {
  return (
    <main className={`container`}>
      <Header />
      <OverviewContent />
    </main>
  );
};

export default OverviewDashboard;
