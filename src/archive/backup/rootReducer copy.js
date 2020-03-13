import { LOAD_FETCH, REMOVE_ADD, ADD_REMOVE } from "./actionCreators";

const initialState = {
  mylist: [],
  recommendations: []
  // isList: true
};

function rootReducer(state = initialState, action) {
  console.log("state", state);
  console.log("action", action);
  debugger;

  switch (action.type) {
    case LOAD_FETCH:
      return {
        ...state,
        mylist: action.dataLoad.mylist.map(val => {
          val["isList"] = true;
        }),
        recommendations: action.dataLoad.recommendations.map(val => {
          val["isList"] = false;
        })
      };
    case REMOVE_ADD:
      let idRemove = action.id;
      let newStateRA = { ...state };
      let newList = state.mylist.filter(lt => lt.id !== idRemove);
      let newRecomItem = state.mylist.filter(lt => lt.id === idRemove)[0];
      return {
        ...newStateRA,
        mylist: newList,
        recommendations: [...state.recommendations, newRecomItem]
      };
    case ADD_REMOVE:
      let idAdd = action.id;
      let newStateAR = { ...state };
      let newRecomList = state.recommendations.filter(rm => rm.id !== idAdd);
      let newListItem = state.recommendations.filter(rm => rm.id === idAdd)[0];
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
