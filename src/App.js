import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import TicketsFilter from './components/TicketsFilter';
import TicketsItem from './components/TicketsItem';
import TikcetsAdd from './components/TikcetsAdd';
import TicketsDates from './components/TicketsDates';
import axios from 'axios';

function App() {

  const [ticketsNum, setTicketsNum ] = useState(5);
  const [tickets, setTickets ] = useState([]);
  const [sortedTickets, setSortedTickets] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/163b5e66df9f2741243e')
    .then((response) => setTickets(response.data))
    .then(console.log(tickets))
    .catch(function (error) {
    console.log(error);
  })}, [])

  const clickHandler = () => {setTicketsNum(state => state += 5); console.log(ticketsNum)}

  const chooseCheap = () => {
    let newTickets = tickets.sort((prev, next) => prev.price - next.price);
    setSortedTickets(newTickets);
  }

  useEffect(() => {
    setTickets(sortedTickets);
  }, []);

  return (
    <div className="container">
      <Header />
      <TicketsDates />
      <main>
        <Filter />
        <section className='tickets'>
          <TicketsFilter chooseCheap={chooseCheap}/>  
          <>
            {tickets.filter((item, idx) => 
               idx < ticketsNum).map((ticket) => ( 
              <TicketsItem ticket={ticket}/>
            ))}
          </> 
              <TikcetsAdd clickHandler={clickHandler}/>
        </section>  
      </main>
    </div>
  );
}

export default App;
