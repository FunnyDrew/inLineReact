export default class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      this.name = this.props.name
    }

    newbtn () {
      return (
        <div>
          <div>You Liked this, {this.name}</div>
          <button onClick={this.restartBtn}>
            Restart, {this.name}!
          </button>
        </div>
      )
    }

    restartBtn = () => {      
      return this.setState({liked: false})       
    }
  
    render() {
      if (this.state.liked) {
        //return `You liked this, ${this.name}`;
        return this.newbtn();        
      }
  
      return (        
        <button onClick={() => this.setState({ liked: true })}>
          Нравится, {this.name}!
        </button>
      );
    }
  }