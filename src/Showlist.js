import React from "react";
import Showitem from "./Showitem";
import { connect } from "react-redux";
import { fetchData, removeAdd, addRemove } from "./actionCreators";
import "./Showlist.css";

class Showlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    console.log("START componentDidMount");
    this.props.fetchData();
    console.log(this.props);
    console.log("END componentDidMount");
  }
  handleChange(id) {
    let toggle = false;
    this.props.recommendations.forEach(val => {
      if (val.id === id) {
        toggle = true;
      }
    });
    if (!toggle) {
      this.props.removeAdd(id);
    } else {
      this.props.addRemove(id);
    }
  }

  render() {
    const { isList } = this.props;
    const mylist = this.props.mylist.map(ml => (
      <li>
        <Showitem
          key={ml.id}
          {...ml}
          handleChange={this.handleChange}
          isList={isList}
        />
      </li>
    ));
    const recommendations = this.props.recommendations.map(rc => (
      <li>
        <Showitem
          key={rc.id}
          {...rc}
          handleChange={this.handleChange}
          isList={!isList}
        />
      </li>
    ));
    return (
      <div className="main">
        <h2>My List:</h2>
        <div className="showList">{mylist}</div>
        <h2>Recommendations:</h2>
        <div className="showList">{recommendations}</div>
      </div>
    );
  }
}
const mapStateToProps = stateRedux => {
  // debugger;
  return {
    mylist: stateRedux.mylist,
    recommendations: stateRedux.recommendations,
    isList: true
  };
};
export default connect(mapStateToProps, { fetchData, removeAdd, addRemove })(
  Showlist
);
