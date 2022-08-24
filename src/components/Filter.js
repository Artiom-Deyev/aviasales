import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseTrans } from '../ticketsState';

const TicketsFilter = () => {
    const dispatch = useDispatch();

    const selectTrans = (e) => {
        dispatch(chooseTrans(parseInt(e.target.id.substring(6))));
    }

  return (
    <section className="filter">
                
            <ul>
                <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
                <li>
                    <input onChange={selectTrans} type="radio" id="trans-0" name="trans-type" defaultChecked />
                    <p><label htmlFor="trans-type">Без пересадок</label></p>
                </li>
                <li>
                    <input onChange={selectTrans} type="radio" id="trans-1" name="trans-type" />
                    <p><label htmlFor="trans-type-1">1 пересадка</label></p>
                </li>
                <li>                        
                    <input onClick={selectTrans} type="radio" id="trans-2" name="trans-type" />
                    <p><label htmlFor="trans-type-2">2 пересадки</label></p>
                </li>
                <li>                        
                    <input onClick={selectTrans} type="radio" id="trans-3" name="trans-type" />
                    <p><label htmlFor="trans-type-3">3 пересадки</label></p>
                </li>
            </ul>

            <ul>
                <h4>КОМПАНИЯ</h4>
                <li>
                    <input type="radio" id="companies-all" name="company" defaultChecked />
                    <p><label htmlFor="companies-all">Все</label></p>
                </li>
                <li>
                    <input type="radio" id="companies-1" name="company" />
                    <p><label htmlFor="companies-1">S7 Airlines</label></p>    
                </li>
                <li>
                    <input type="radio" id="companies-2" name="company" />
                    <p><label htmlFor="companies-2">XiamenAir</label></p>        
                </li>
            </ul>
                
        </section>
  )
}

export default TicketsFilter;
