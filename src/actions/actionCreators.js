export const LOAD_FETCH = "LOAD_FETCH";
export const REMOVE_ADD = "REMOVE_ADD";
export const ADD_REMOVE = "ADD_REMOVE";

function loadFetch(dataLoad) {
  return {
    type: LOAD_FETCH,
    dataLoad
  };
}

export function removeAdd(id) {
  return {
    type: REMOVE_ADD,
    id
  };
}

export function addRemove(id) {
  return {
    type: ADD_REMOVE,
    id
  };
}

export function fetchData() {
  return dispatch => {
    console.log("START fetchData");
    return fetch(`./datalist.json`, {
      headers: {
        accepts: "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("GET response");
        console.log(data);
        dispatch(loadFetch(data));
        console.log("END fetchData");
      })
      .catch(err => console.log("ERROR: ", err));
  };
}
