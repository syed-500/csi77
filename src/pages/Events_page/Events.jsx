import Cards from './EvCards';
import displayData from '../../constants/Data1';
import '../../css/events.css';
import random from "../../assets/csi-photos-events/20240427_105721.jpg"
const Eventspage = () => {
        
    const DataToDisplay = displayData.map((event) => (
        <Cards
            key={event.id}
            title={event.title}
            date={event.date}
            loc={event.loc}
            poster={random}
            para={event.para}
        />
        
   
    ));

    return (
        <div className="eventsmain flex flex-col ">
            <div className=" events-text-content">
                <h2>Events</h2>
            </div>
            <div className='flex flex-col items-center justify-center mr-16 mb-24 mt-[-100px]'>
            {DataToDisplay}
            </div>
        </div>
    );
};

export default Eventspage;