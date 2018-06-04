console.log("app");

// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'hello',
  options: [],
}

const onFormSubmit = (e) => {
  e.preventDefault(); //Stops full page reload

// e.target: event that was targetted, which is the form in this case
// e.target.elements shows list of all the elements that can be selected (like HTML tags, classes, id)

  const option = e.target.elements.option.value; 

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

const onRemoveAll = (e) => {
  e.preventDefault();

  app.options = [];
  renderIndecisionApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]);  
};

// Selects the element first
const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
  const template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No option</p>}
    
    <form onSubmit={onRemoveAll}>
      <button>Remove All</button>
    </form>

    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    <ol>
      {
        app.options.map((option) => <li key = {option}>{option}</li>
        )
      }
    </ol>

    <form onSubmit={onFormSubmit}>
      <input type='text' name='option' />
      <button>Add Option</button>
    </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderIndecisionApp();
