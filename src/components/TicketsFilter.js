import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseCheap, chooseFast, chooseOptimal } from '../ticketsState';

const TicketsFilter = () => {
  const dispatch = useDispatch();

  const selectCheap = () => {
  dispatch(chooseCheap());
 }  

 const selectFast = () => {
  dispatch(chooseFast());
 }

 const selectOptimal = () => {
  dispatch(chooseOptimal());
 }

  return (
    <div className="tickets-filter">
        <button onClick={selectCheap}>САМЫЙ ДЕШЕВЫЙ</button>
        <button onClick={selectFast}>САМЫЙ БЫСТРЫЙ</button>
        <button onClick={selectOptimal}>ОПТИМАЛЬНЫЙ</button>
    </div>
  )
}

export default TicketsFilter;
