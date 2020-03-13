import React from "react";
import "./ButtonItem.css";
function ButtonItem({ id, handleChange, sectionName }) {
  console.log("sectionName", sectionName);
  const btnText = sectionName === "MYLIST" ? "REMOVE" : "ADD";
  return (
    <button className="btn" onClick={() => handleChange(id)}>
      {btnText}
    </button>
  );
}
export default ButtonItem;
