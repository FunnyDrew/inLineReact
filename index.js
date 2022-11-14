'use strict';

import LikeButton from "./component.js";

/*const domContainer = document.querySelector('#component_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<LikeButton name = "Jhon"/>);*/
function App() {
  return React.createElement(
    "div",
    { className: "flex" },
    React.createElement(LikeButton, { name: "Karter" }),
    React.createElement(LikeButton, { name: "Judit" })
  );
}

var domContainer = document.querySelector('#component_container');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App, null));