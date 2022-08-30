import React from 'react';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { filterOrigin } from '../ticketsState';
import { useState } from 'react';

const TicketsDates = () => {
  const [value, onChange] = useState(new Date());

  //Getting tickets array
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets);

  //Getting destination array
  const destinationList = []
  tickets.forEach(item => destinationList.push(item.info.destination));

  //Getting origin array
  const originList = []
  tickets.forEach(item => originList.push(item.info.origin));

  //console.log(originList);

  //Calendar logic
  const [isCalendar, setCalendar] = useState(false);
  const [isLeftInputClicked, setIsLeftInputClicked] = useState(false);
  const [isRightInputClicked, setIsRightInputClicked] = useState(false);

  const clickHandlerLeft = () => {
    if(isRightInputClicked && isCalendar) {
      setIsRightInputClicked(false);
      setIsLeftInputClicked(!isLeftInputClicked);
    } else {
      setIsLeftInputClicked(true);
      setCalendar(!isCalendar);     
    }
  }

  const clickHandlerRight = () => {
    if(isLeftInputClicked && isCalendar) {
      setIsRightInputClicked(!isRightInputClicked);
      setIsLeftInputClicked(false)
    } else {
      setIsRightInputClicked(true);
      setCalendar(!isCalendar);
    }
  }

  const changeHandler = (e) => {
    filterOrigin(e.target.value);
    //console.log(e.target.value);
  }

  return (
    <section className="select">

        <div className="select-first">

            <input type="text" name="where-to"
            placeholder="Откуда"
            onChange={changeHandler}>                   
            </input>   
            {/* <FontAwesomeIcon icon={["fas", "coffee"]} />             */}
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </div>

        <input type="text" placeholder="Куда"></input>       

        <div className="select-datepicker">
            <input type="text" placeholder="Когда" onClick={clickHandlerLeft} />
        </div>


        <div className="select-datepicker select-datepicker-back">
            <input type="text" placeholder="Обратно" onClick={clickHandlerRight}/>
            {isCalendar && <Calendar onChange={onChange} value={value}/>}
            {/* <div className="calendar">

            </div> */}
        </div>

    </section>
  )
}

export default TicketsDates;
