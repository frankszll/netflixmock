import React from "react";
import Showitem from "./Showitem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData, removeAdd, addRemove } from "./actionCreators";
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
      console.log("val[0]", val[0]);
      if (val[0].id === id) {
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
    // console.log("this.props", this.props);
    const arrProps = [];
    const tyleList = ["mylist", "recommendations"];
    for (let ele in this.props) {
      // console.log("ele", ele);
      tyleList.forEach(str => {
        if (str === ele) {
          arrProps.push(this.props[ele]);
        }
      });
    }

    // console.log("arrProps", arrProps);
    const curlist = arrProps.map(arr => {
      // console.log("arr.isList", Array.isArray(arr[0]));

      return arr.map(list => {
        // console.log("list[0]", list[0]);
        return (
          <li>
            <Showitem
              key={list[0].id}
              // img={list[0].img}
              // title={list[0].title}
              {...list[0]}
              handleChange={this.handleChange}
            />
          </li>
        );
      });
    });
    // const recommendations = this.props.recommendations.map(rc => (
    //   <li>
    //     <Showitem
    //       key={rc.id}
    //       {...rc}
    //       handleChange={this.handleChange}
    //       // isList={!isList}
    //     />
    //   </li>
    //));
    return (
      <div className="main">
        {/* <h2>Recommendations:</h2> */}
        <div className="showList">{curlist}</div>
        {/* <h2>Recommendations:</h2>
        <div className="showList">{recommendations}</div> */}
      </div>
    );
  }
}
function mapStateToProps(stateRedux) {
  // debugger;
  return {
    mylist: stateRedux.mylist,
    recommendations: stateRedux.recommendations
    //isList: true
  };
}
function mapDispatchToProps(dispatch) {
  // console.log("dispatch", dispatch);
  return bindActionCreators({ fetchData, removeAdd, addRemove }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Showlist);
