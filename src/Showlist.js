import React from "react";
import Showitem from "./Showitem";
import "./Showlist.css";

class Showlist extends React.Component {
  render() {
    const { handleChange } = this.props;
    const { isList } = this.props;
    // console.log(isList);
    const mylist = this.props.mylist.map((ml, index) => (
      <li>
        <Showitem
          key={ml.id}
          {...ml}
          handleChange={handleChange}
          isList={isList}
        />
      </li>
    ));
    const recommendations = this.props.recommendations.map((rm, index) => (
      <li>
        <Showitem
          key={rm.id}
          {...rm}
          handleChange={handleChange}
          isList={!isList}
        />
      </li>
    ));

    return (
      <div className="mylist">
        <h2>My List:</h2>
        <div className="showList">{mylist}</div>

        <h2>Recommendations:</h2>
        <div className="showList">{recommendations}</div>
      </div>
    );
  }
}

export default Showlist;
