let count = 0;
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
