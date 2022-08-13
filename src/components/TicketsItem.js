import planeLogo from '../img/s7-logo.png';

const TicketsItem = ( ticket ) => {

  //console.log(ticket.ticket.info.origin);

  return (       
        <div className="tickets-item" key={ticket.ticket.id}>
          <div className="tickets-item-header">
            <p>{ticket.ticket.price} Р</p>
            <img src={ planeLogo } alt="s7-logo" />
          </div>
          <div className="tickets-item-details">
            <p>{ticket.ticket.info.origin}-{ticket.ticket.info.destination}<br /><span>10:45 - 08.00</span></p>
            <p>В ПУТИ<br /><span>21ч 15м</span></p>
            <p>БЕЗ ПЕРЕСАДОК</p>
          </div>
        </div>
  )
}

export default TicketsItem;
