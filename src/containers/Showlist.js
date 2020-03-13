import React from "react";
import ShowSection from "../components/ShowSection";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData, removeAdd, addRemove } from "../actions/actionCreators";
import "./Showlist.css";
/* eslint-disable */

class Showlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    console.log("START componentDidMount");
    this.props.fetchData();
    // console.log(this.props);
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
    console.log("this.props", this.props);
    const arrProps = [];
    const tyleList = ["mylist", "recommendations"];
    for (let ele in this.props) {
      tyleList.forEach(str => {
        if (str === ele) {
          arrProps.push([str, this.props[ele]]);
        }
      });
    }
    console.log("arrProps", arrProps);
    const curArr = arrProps.map(arr => {
      console.log("arr", arr);
      return <ShowSection arr={arr} handleChange={this.handleChange} />;
    });
    return (
      <div className="main">
        <div>{curArr}</div>
      </div>
    );
  }
}
function mapStateToProps(stateRedux) {
  // debugger;
  return {
    mylist: stateRedux.mylist,
    recommendations: stateRedux.recommendations,
    isList: true,
    isShowInRec: false,
    countRunTime: 0
  };
}
function mapDispatchToProps(dispatch) {
  // console.log("dispatch", dispatch);
  return bindActionCreators({ fetchData, removeAdd, addRemove }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Showlist);
