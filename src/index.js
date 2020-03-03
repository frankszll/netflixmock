import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NetflixApp from "./NetflixApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<NetflixApp />, document.getElementById("root"));

serviceWorker.unregister();
