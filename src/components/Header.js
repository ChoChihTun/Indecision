import React from 'react';

const Header = (props) => ( // Can do this for JSX --> Can add as much JSX as we want just like when we defining our template
  <div className ='header'>
    <div className = 'container'>
      <h1 className = 'header__title'>{props.title}</h1>
      <h2 className = 'header__subtitle'>{props.subtitle}</h2>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Indecision App'
}

export default Header;
