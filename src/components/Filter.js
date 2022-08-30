import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies, chooseTrans, chooseCompany } from '../ticketsState';

const TicketsFilter = () => {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.tickets.companies);

    // Uploading the companies
    useEffect(() => {
        dispatch(fetchCompanies())
    }, [dispatch])

    //Selecting the number of the transitions
    const selectTrans = (e) => {
        dispatch(chooseTrans(parseInt(e.target.id.substring(6))));
        console.log(parseInt(e.target.id.substring(6)))
    }

    const selectCompany = (e) => {
        dispatch(chooseCompany(String(e.target.id)));
    }

  return (
    <section className="filter">
                
            <ul>
                <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
                <li>
                    <input onClick={selectTrans} type="radio" id="trans-0" name="trans-type" defaultChecked />
                    <p><label htmlFor="trans-type">Без пересадок</label></p>
                </li>
                <li>
                    <input onClick={selectTrans} type="radio" id="trans-1" name="trans-type" />
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
                {companies.map(company => <li key={uuidv4()}>
                    <input type="radio" id={company.id} name="company" onClick={selectCompany}/>
                    <p><label htmlFor="companies-2">{company.name}</label></p>    
                </li>)}
            </ul>
                
        </section>
  )
}

export default TicketsFilter;
