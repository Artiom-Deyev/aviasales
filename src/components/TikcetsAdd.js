import React from 'react';

const TikcetsAdd = ({ clickHandler }) => {
  //console.log(clickHandler)
  return (
    <button onClick={clickHandler} className="tickets-add">ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
  )
}

export default TikcetsAdd;
