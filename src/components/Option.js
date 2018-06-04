import React from 'react'; // Need to import react

const Option = (props) => (
  <div className='option'>
    <p className='option__text'>{props.count}. {props.optionText} </p>
    {/* Passing Argument explicitly or else we will be passing the event e object */}
    <button className='button button--link' onClick = {(e) => {
      props.handleDeleteOption(props.optionText);
    }}
    >Remove</button>
  </div>
)  

export default Option;