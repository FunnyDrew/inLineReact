'use strict';

import LikeButton from "./component.js";
import SomeNew from "./component2.js";

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

function App2() {
  return React.createElement(
    "div",
    { className: "bg-red" },
    "And Here We Are",
    React.createElement(SomeNew, { names: ["ame", "day", "time"] })
  );
}

var domContainer = document.querySelector('#component_container');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App2, null));