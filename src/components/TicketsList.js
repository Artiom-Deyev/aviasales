import React from "react";
import { v4 as uuidv4 } from 'uuid';
import TicketsItem from "./TicketsItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../ticketsState";

const TicketsList = () => {
 
   //Fetching tickets
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets);
  
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch]);

  // console.log(tickets.tickets.forEach(item => {
  //   let unix = item.info.duration;
  //   let date = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(unix)//9:27:16 PM
  //   //console.log(date);
  // }))

  //Show more tickets
  const num = useSelector(state => state.add.add)

  return (
    <>
      {tickets.tickets.filter((item, idx) => 
        idx < num).map((ticket) => ( 
        <TicketsItem ticket={ticket}  key={uuidv4()}/>
        ))}
    </>

    // <>
    //     {tickets.tickets.map((ticket) => (
    //         <TicketsItem ticket={ticket} />
    //     ))}
    // </>
  )
}

export default TicketsList;
