import { LOAD_FETCH, REMOVE_ADD, ADD_REMOVE } from "./actionCreators";
/* eslint-disable */

const initialState = {
  mylist: [],
  recommendations: []
  // isList: true
};

function rootReducer(state = initialState, action) {
  // debugger;
  let id = action.id;

  console.log("state", state);
  console.log("action", action);

  switch (action.type) {
    case LOAD_FETCH:
      let newMl = action.dataLoad.mylist.map(val => {
        let newArr = [];
        val["isList"] = true;
        newArr.push(val);
        return newArr;
      });
      let newRc = action.dataLoad.recommendations.map(val => {
        let newArr = [];
        val["isList"] = false;
        newArr.push(val);
        return newArr;
      });
      return {
        ...state,
        mylist: newMl,
        recommendations: newRc
      };
    case REMOVE_ADD:
      let newStateRA = { ...state };
      console.log("newStateRA", newStateRA);
      let newList = newStateRA.mylist.map(lt => {
        console.log("lt", lt);
        console.log("lt[0].id", lt[0].id);
        console.log("id", id);
        console.log("lt[0].id !== id", lt[0].id !== id);
        if (lt[0].id === id) {
          let idx = newStateRA.mylist.indexOf(lt);
          newStateRA.mylist.splice(idx - 1, 1);
        }
        return newStateRA.mylist;
      });
      let newRecomItem = state.mylist.filter(lt => lt[0].id === id);
      console.log("newList", newList);
      newRecomItem["isList"] = true;
      return {
        ...newStateRA,
        mylist: newList,
        recommendations: [...state.recommendations, newRecomItem]
      };
    case ADD_REMOVE:
      let newStateAR = { ...state };
      let newRecomList = state.recommendations.filter(rm => rm[0].id !== id);
      let newListItem = state.recommendations.filter(rm => rm[0].id === id);
      newListItem["isList"] = false;
      return {
        ...newStateAR,
        mylist: [...state.mylist, newListItem],
        recommendations: newRecomList
      };
    default:
      return state;
  }
}

export default rootReducer;
