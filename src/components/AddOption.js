import React from 'react';

export default class AddOption extends React.Component {
    state = {
      error: undefined
    }
  
  // If need to pass data to parent function, we need to define function here to listen for event and pass the data
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => ({ error })); // Same as error: error

    // Erase the text box input
    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form className='add-option' onSubmit={this.handleAddOption}> {/*Only when we need to pass data like adding, we need to use child function and NOT parent function */}
          <input className='add-option__input' type='text' name='option' />
          <button className='button'>Add Option</button>
        </form>
      </div>
    )
  }
}
