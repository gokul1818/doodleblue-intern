import React from 'react';
import Button from '../Button/Button';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}
  
    </div>
  );
};

export default Card;
