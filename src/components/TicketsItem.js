//import React, { useState } from 'react';




const TicketsItem = ( key ) => {

  // const [ticketsNum, setTicketsNum] = useState([
  //   1, 2, 3, 4, 5
  // ]);

  return (
        
        <div className="tickets-item" key={key}>
                    <div className="tickets-item-header">
                        <p>13 400 Р</p>
                        <img src="/img/s7-logo.png" alt="s7-logo" />
                    </div>
                    <div className="tickets-item-details">
                        <p>MOW-HKT<br /><span>10:45 - 08.00</span></p>
                        <p>В ПУТИ<br /><span>21ч 15м</span></p>
                        <p>БЕЗ ПЕРЕСАДОК</p>
                    </div>
            </div>
  )
}

export default TicketsItem;
