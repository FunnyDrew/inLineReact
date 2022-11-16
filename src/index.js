'use strict';
import LikeButton from "./component.js";
import SomeNew from "./component2.js";

/*const domContainer = document.querySelector('#component_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<LikeButton name = "Jhon"/>);*/
function App() {
  return (
    <div className="flex">
      <LikeButton name = "Karter"/>
      <LikeButton name = "Judit"/>
    </div>
  )
}

function App2() {
  return (
    <div className="bg-red">
      And Here We Are
      <SomeNew names = {["ame", "day", "time"]}/>
    </div>
  )
}

const domContainer = document.querySelector('#component_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<App2 />);