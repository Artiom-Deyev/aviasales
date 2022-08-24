import planeLogo from '../img/s7-logo.png';

const TicketsItem = ( ticket ) => {

  //Converting flight duration time
  let unix = ticket.ticket.info.duration;
  let flightDuration = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(unix)//9:27:16 PM

  //Converting flight departure time
  let unixStart = ticket.ticket.info.dateStart;
  let dateObject = new Date(unixStart);
  let departureTime = dateObject.toLocaleString("en-US", {hour: 'numeric'});

  return (       
        <div className="tickets-item">
          <div className="tickets-item-header">
            <p>{ticket.ticket.price} Р</p>
            <img src={ planeLogo } alt="s7-logo" />
          </div>
          <div className="tickets-item-details">
          <p>{ticket.ticket.info.origin}-{ticket.ticket.info.destination}<br /><span>{departureTime} - 08.00</span></p>
            <p>В ПУТИ<br /><span>{flightDuration}</span></p>
            <p>{ticket.ticket.info.stops.length > 0 ? ticket.ticket.info.stops.length : 'БЕЗ ПЕРЕСАДОК'}</p>
          </div>
        </div>
  )
}

export default TicketsItem;
