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

  //Show more tickets
  const num = useSelector(state => state.add.add)

  //console.log(tickets)

  return (
    <>
      {tickets.tickets.filter((item, idx) => 
        idx < num).map((ticket) => ( 
        <TicketsItem ticket={ticket}  key={uuidv4()}/>
        ))}
    </>
  )
}

export default TicketsList;
