import React from "react";
import Showitem from "./Showitem";

function ShowSection({ arr, handleChange }) {
  let sectionName = "";
  sectionName = arr[0].toUpperCase();
  const curlist = arr[1].map(obj => {
    return (
      <li>
        <Showitem
          key={obj.id}
          {...obj}
          handleChange={handleChange}
          sectionName={sectionName}
        />
      </li>
    );
  });
  return (
    <div>
      <h2>{sectionName}</h2>
      <div className="showList">{curlist}</div>
    </div>
  );
}

export default ShowSection;
