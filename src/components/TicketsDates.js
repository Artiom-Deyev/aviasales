import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const TicketsDates = () => {
  return (
    <section className="select">

        <div className="select-first">

            <input type="text" name="where-to"
            placeholder="Откуда">                   
            </input>   
            {/* <FontAwesomeIcon icon={["fas", "coffee"]} />             */}
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </div>

        <input type="text" placeholder="Куда"></input>       

        <div className="select-datepicker">
            <input type="text" placeholder="Когда" />
        </div>


        <div className="select-datepicker select-datepicker-back">
            <input type="text" placeholder="Обратно" />
            <div className="calendar">

            </div>
        </div>

    </section>
  )
}

export default TicketsDates;
