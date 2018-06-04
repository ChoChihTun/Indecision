class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = {
      visibility: false
    }
  }

  toggleButton() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleButton}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && <p>These are some details you can now see!</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
