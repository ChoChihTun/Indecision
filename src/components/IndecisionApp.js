import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options'
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
    
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  // Put function here so changes in child classes can be reflected in parent and we pass this method down
  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      // Filter out the false
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
  };

  // Lifecycle Methods
  // INITIALISING
  componentDidMount() {
    try {
      const json = localStorage.getItem('options'); // get the data of the specified key (option in this case)
      const options = JSON.parse(json); // Convert JSON string to Javascript Object

      // Only set if the data(options) stored in storage is NOT null or empty 
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch(e) {
      // Do nothing at all 
      // This error happens when JSON is in the wrong format
    }
  };

  // SAVING/UPDATING
  componentDidUpdate(prevProps, prevState) {
    // To reduce redundant saving/updating such as adding invalid option (No change in the actual data as invalid data is NOT saved).
    // i.e. this method is always called when setState is called. However, it will also be called when invalid option is entered in AddOption class
    if (prevState.options.length !== this.state.options.length) {
      // Convert JavaScript object into JSON string
      const json = JSON.stringify(this.state.options);
      // Saving & Updating the data of the specified key (options in this case)
      localStorage.setItem('options', json);
    }
  };

 

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title = {title} subtitle={subtitle} /> {/* Calling the Class Header. Coding Convention to put slash behind */}
        <div className = 'container'>
          <Action 
            hasOptions = {this.state.options.length > 0}
            handlePick = {this.handlePick} 
          />
          <div className='widget'>
            <Options 
              options = {this.state.options} 
              handleDeleteOptions = {this.handleDeleteOptions}
              handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption = {this.handleAddOption}
            />          
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption = {this.handleClearSelectedOption}
        />
      </div>
    )
  };
};
