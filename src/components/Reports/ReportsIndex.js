import React, { useState } from "react";
import ReportItem from "./ReportItem";
import PreviewReport from "./PreviewReport/PreviewReport";
import { ReportsContainer } from "../../styles/Reports/ReportsIndexStyled";

const dummyReports = [
  {
    reportId: 1,
    name: "Office 101 Weekly Report",
  },
  {
    reportId: 2,
    name: "Office 201 Weekly Report",
  },
  {
    reportId: 3,
    name: "Office 301 Weekly Report",
  },
];

// get all reports, preview, download, search, share
const ReportsIndex = (props) => {
  const [itemBeingPreviewed, setItemBeingPreviewed] = useState(-1);

  const itemIsClicked = (id) => {
    setItemBeingPreviewed(id);
  };

  const reportItems = dummyReports.map((item, index) => (
    <ReportItem
      key={item.reportId}
      id={item.reportId}
      reportName={item.name}
      onClick={itemIsClicked}
    />
  ));

  return (
    <ReportsContainer>
      {reportItems}
      {itemBeingPreviewed && <p>Item</p>}
    </ReportsContainer>
  );
};

export default ReportsIndex;
