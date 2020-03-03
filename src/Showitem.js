import React from "react";
import "./Showitem.css";

class Showitem extends React.Component {
  render() {
    const { title, id, img, handleChange, isList } = this.props;
    const btnText = isList ? "REMOVE" : "ADD";
    return (
      <div className="showcard">
        <div className="showPic">
          <img className="showImg" src={img} alt="title" />
          <button className="btn" onClick={() => handleChange(id)}>
            {btnText}
          </button>
        </div>
        <h3>{title}</h3>
      </div>
    );
  }
}

export default Showitem;
