const appRoot = document.getElementById('app');
const button = ['Show details', 'Hide details'];
let toggleNum = 0;

const toggleButton = () => {
  if (toggleNum === 1) {
    toggleNum = 0;
  } else {
    toggleNum = 1;
  }
  // visibility = !visibility
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      { /*Can do {visibility ? 'Hide details' : 'Show details'} */}
      <button onClick={toggleButton}>{button[toggleNum]}</button>
      {(toggleNum === 1) && <p>These are some details you can now see!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

render();

