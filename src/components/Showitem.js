import React from "react";
import ContentItem from "./ContentItem";
import ButtonItem from "./ButtonItem";
import "./Showitem.css";
/* eslint-disable */

function Showitem({ img, title, id, sectionName, handleChange }) {
  // debugger;
  return (
    <div className="showcard">
      <ContentItem title={title} img={img} />
      <ButtonItem
        id={id}
        sectionName={sectionName}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Showitem;
