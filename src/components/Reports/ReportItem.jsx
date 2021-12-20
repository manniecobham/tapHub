import React from "react";

const ReportItem = (props) => {
  const itemIsClicked = (event) => {
    props.onClick(props.id);
  };

  return (
    <div onClick={itemIsClicked}>
      <img src="" alt="file" />
      <p>{props.reportName}</p>
    </div>
  );
};

export default ReportItem;
