import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncrease } from './addState';

const TikcetsAdd = ({ clickHandler }) => {
  
  return (
    <button onClick={clickHandler} className="tickets-add">ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
  )
}

export default TikcetsAdd;
