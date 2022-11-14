export default class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      this.name = this.props.name
    }
  
    render() {
      if (this.state.liked) {
        return `You liked this, ${this.name}`;
      }
  
      return (
        <button onClick={() => this.setState({ liked: true })}>
          Нравится, {this.name}!
        </button>
      );
    }
  }