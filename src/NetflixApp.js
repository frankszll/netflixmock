import React from "react";
import Navbar from "./Navbar";
import Showlist from "./Showlist";
import "./NetflixApp.css";

class NetflixApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mylist: [],
      recommendations: [],
      isList: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    this.handleAddToRecom = this.handleAddToRecom.bind(this);
  }
  componentDidMount() {
    console.log("START componentDidMount");
    const { mylist } = this.state;
    const { recommendations } = this.state;
    this.setState({ mylist: mylist, recommendations: recommendations });
    this.fetchData(mylist);
    console.log("END componentDidMount");
  }
  fetchData = mylist => {
    console.log("START fetchData");
    fetch(`./datalist.json`, {
      headers: {
        accepts: "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("get response");
        console.log(res);
        this.setState({
          mylist: res.mylist,
          recommendations: res.recommendations
        });
      });
    console.log("END fetchData");
  };
  handleRemoveFromList(id) {
    let newList = this.state.mylist.filter(lt => lt.id !== id);
    let newRecomItem = this.state.mylist.filter(lt => lt.id === id)[0];
    console.log(newList);
    console.log(newRecomItem[0]);
    this.setState(() => {
      return {
        mylist: newList,
        recommendations: [...this.state.recommendations, newRecomItem]
      };
    });
  }

  handleAddToRecom(id) {
    let newRecomList = this.state.recommendations.filter(rm => rm.id !== id);
    let newListItem = this.state.recommendations.filter(rm => rm.id === id)[0];
    this.setState(() => {
      return {
        mylist: [...this.state.mylist, newListItem],
        recommendations: newRecomList
      };
    });
  }

  handleChange(id) {
    let toggle = false;
    this.state.recommendations.forEach(val => {
      if (val.id === id) {
        toggle = true;
      }
    });

    if (!toggle) {
      this.handleRemoveFromList(id);
    } else {
      this.handleAddToRecom(id);
    }
  }

  render() {
    return (
      <div className="NFApp">
        <Navbar />
        <Showlist
          mylist={this.state.mylist}
          recommendations={this.state.recommendations}
          isList={this.state.isList}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NetflixApp;
