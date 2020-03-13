import React from "react";

function ContentItem({ img, title }) {
  return (
    <div>
      <img className="showImg" src={img} alt="title" />
      <h3>{title}</h3>
    </div>
  );
}
export default ContentItem;
