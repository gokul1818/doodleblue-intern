import React from 'react';
import Button from '../UI/Button/Button';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import Card from '../UI/Card/Card';
const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>MickeyMouse</h1>
      
      <Navigation  onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
