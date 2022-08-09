import { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import TicketsFilter from './components/TicketsFilter';
import TicketsItem from './components/TicketsItem';
import TikcetsAdd from './components/TikcetsAdd';

function App() {

  const [ticketsNum ] = useState([
    1, 2, 3, 4, 5, 6
  ]);

  return (
    <div className="container">
      <Header />
      <main>
        <Filter />
        <section className='tickets'>
          <TicketsFilter />  
          <>
            {ticketsNum.map(key => (
              <TicketsItem key={key}/>
            ))}
          </> 
              <TikcetsAdd />
        </section>  
      </main>
    </div>
  );
}

export default App;
