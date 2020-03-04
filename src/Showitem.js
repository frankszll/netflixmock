import React from "react";
import "./Showitem.css";

function Showitem({ title, id, img, handleChange, isList }) {
  const btnText = isList ? "REMOVE" : "ADD";
  return (
    <div className="showcard">
      <img className="showImg" src={img} alt="title" />
      <h3>{title}</h3>
      <button className="btn" onClick={() => handleChange(id)}>
        {btnText}
      </button>
    </div>
  );
}

export default Showitem;
