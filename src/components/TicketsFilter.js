import React from 'react';

const TicketsFilter = ({ chooseCheap }) => {
  
  return (
    <div className="tickets-filter">
        <button onClick={chooseCheap}>САМЫЙ ДЕШЕВЫЙ</button>
        <button>САМЫЙ БЫСТРЫЙ</button>
        <button>ОПТИМАЛЬНЫЙ</button>
    </div>
  )
}

export default TicketsFilter;
