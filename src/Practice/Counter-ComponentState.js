class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // Define the default state as an OBJECT
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const stringCount = JSON.parse(json);
      const count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }))
      }
    } catch(e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }

  handleAdd() {
    // Set state is built-in function in React.Component --> Returns an updated OBJECT. We only update the relevant properties and NOT replace the prevState object
    // PrevState(can define our own name) is the state before calling this function
    this.setState((prevState) => {
      // Return an updated object
      return {
        // Only need to include properties that we want to change. Unchanged properties will remain the same
        count: prevState.count + 1
      }
    });
  }

  handleMinus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/* let count = 0;
const addOne = () => {
  count += 1;
  renderCounterApp();
}

const minusOne = () => {
  count -= 1;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

// Selects the element first
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  // Render the template into the selected element
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
 */