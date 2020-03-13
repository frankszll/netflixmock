import React from "react";
import ContentItem from "./ContentItem";
import ButtonItem from "./ButtonItem";
import "./Showitem.css";
// import { render } from "@testing-library/react";
/* eslint-disable */

function Showitem({ img, title, id, isList, isShowInRec, handleChange }) {
  // debugger;
  // const listTypeText = isList ? "MyList:" : "Recommendations:";
  let isShow = true;
  if (isList === false && isShowInRec === false) {
    isShow = false;
  } else if (isList === true && isShowInRec === true) {
    isShow = false;
  } else if (isList === true && isShowInRec === false) {
    isShow = false;
  } else if (isList === true && isShowInRec === true) {
    isShow = false;
  }

  console.log(isShow);
  return (
    <div className={isShow ? "showcardHide" : "showcard"}>
      {/* <h2>{listTypeText}</h2> */}
      {/* <div>
        <img className="showImg" src={img} alt="title" />
        <h3>{title}</h3>
      </div> */}
      <ContentItem title={title} img={img} />
      <ButtonItem id={id} isList={isList} handleChange={handleChange} />
    </div>
  );
}

export default Showitem;
