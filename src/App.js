import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncrease } from './components/addState';
import Header from './components/Header';
import Filter from './components/Filter';
import TicketsFilter from './components/TicketsFilter';
import TicketsList from './components/TicketsList';
import TikcetsAdd from './components/TikcetsAdd';
import TicketsDates from './components/TicketsDates';
//import Calendar from 'react-calendar';
import axios from 'axios';

function App() {

  const [tickets, setTickets ] = useState([]);
  const [sortedTickets, setSortedTickets] = useState([]);

  //Adding more tickets
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addIncrease());
  }

  //Filter
  const chooseCheap = () => {
    let newTickets = tickets.sort((prev, next) => prev.price - next.price);
    setSortedTickets(newTickets);
  }

  const chooseTrans = (e) => {
    let num = parseInt(e.target.id.substr(6));
    let newTickets = tickets.filter((ticket) => ticket.info.stops.length === num);
    console.log(newTickets)
    setTickets(newTickets);
  }

  useEffect(() => {
    setTickets(sortedTickets);
  }, []);

  return ( 
      <div className="container">
        <Header />
          <TicketsDates />
          {/* <Calendar onChange={onChange} value={value} /> */}
          <main>
            <Filter chooseTrans={chooseTrans}/>
            <section className='tickets'>
              <TicketsFilter
               chooseCheap={chooseCheap}/>  
              <TicketsList 
              />
              <TikcetsAdd clickHandler={clickHandler}/>
            </section>  
          </main>
      </div>
  );
}

export default App;
