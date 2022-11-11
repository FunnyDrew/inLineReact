import LikeButton from "./component.js";

'use strict';

/*class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Нравится!
      </button>
    );
  }
}*/

var domContainer = document.querySelector('#like_button_container');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton, null));