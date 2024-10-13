import React from 'react'
import '../../src/events.css';
import Nav from '../components/Nav';
import Events from '../components/Events';
import Cards from '../components/cards';
import Footer from '../components/Footer';
import displayData from '../components/data';

const Eventspage = () => {
    const DataToDisplay = displayData.map((event) => {
        return (
          // <Cards
          //   key={event.id}
          //   title={event.title}
          //   date={event.date}
          //   loc={event.loc}
          //   poster={event.img}
          //   para={event.para}
          // />
          <CardEvents key={event.id}/>
        );
      });

  

  return (
    <div className="eventsmain"  >
      <Nav />
        <Events />
      {DataToDisplay}
    
    </div>
  );
}






export default Eventspage