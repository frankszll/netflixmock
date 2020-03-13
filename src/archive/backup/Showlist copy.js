import React from "react";
import Showitem from "./Showitem";
import { connect, ReactReduxContext } from "react-redux";
import { fetchData, removeAdd, addRemove } from "./actionCreators";
import { bindActionCreators } from "redux";
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
    // let toggle = false;
    // console.log(isRecommendations);
    // if (isRecommendations) {
    //   toggle = true;
    // }
    console.log("this.props.isList");
    console.log(this.props.isList);
    // if (this.props.isList) {
    //   this.props.removeAdd(id);
    // } else {
    //   this.props.addRemove(id);
    // }
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
    // const { isList } = this.props;
    const newValue = [];
    console.log("this.props after dispatch: " + this.props);

    for (var obj in this.props) {
      // console.log(obj);
      newValue.push(this.props[obj]);
      // .map(val => {
      //   console.log(val);
      // });
    }
    for (var l in newValue) {
      // console.log(newValue[l]);
    }
    // console.log(newValue);

    // const { mylist, recommendations } = this.props;
    // console.log("mylist");
    // console.log(mylist);
    // const newArr = mylist.concat(recommendations);
    // console.log("newArr");
    // console.log(newArr);
    // const cur = Object.values(this.props).map(arr => {
    //   console.log("arr");
    //   console.log(arr);
    // });

    // const curlist = cur.map(arr => {
    //   arr.map(l => (
    //     <li>
    //       <Showitem key={l.id} {...l} handleChange={this.handleChange} />
    //     </li>
    //   ));
    // });
    console.log("this.props1111.mylist");

    console.log(this.props);
    const mylist = this.props.mylist.map(ml => (
      <li>
        <Showitem
          key={ml.id}
          {...ml}
          handleChange={this.handleChange}
          // isList={isList}
        />
      </li>
    ));
    const recommendations = this.props.recommendations.map(rc => (
      <li>
        <Showitem
          key={rc.id}
          {...rc}
          handleChange={this.handleChange}
          // isList={!isList}
        />
      </li>
    ));
    return (
      <div className="main">
        {/* {curlist} */}
        <h2>My List:</h2>
        <div className="showList">{mylist}</div>
        <h2>Recommendations:</h2>
        <div className="showList">{recommendations}</div>
      </div>
    );
  }
}
function mapStateToProps(stateRedux) {
  // debugger;
  return {
    mylist: stateRedux.mylist,
    recommendations: stateRedux.recommendations
    // isList: true
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData, removeAdd, addRemove }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Showlist);
