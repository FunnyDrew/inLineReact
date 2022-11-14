'use strict';
import LikeButton from "./component.js";

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

const domContainer = document.querySelector('#component_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);