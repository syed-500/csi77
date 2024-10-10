
import Header from '../components/Header';
import Cards from '../components/EvCards';
import displayData from '../components/Data1';
import '../css/events.css';
const Eventspage = () => {
    const DataToDisplay = displayData.map((event) => (
        <Cards
            key={event.id}
            title={event.title}
            date={event.date}
            loc={event.loc}
            poster={event.img}
            para={event.para}
        />
    ));

    return (
        <div className="eventsmain">
            <Header />
            <div className="events-text-content">
                <h2>Events</h2>
            </div>
            {DataToDisplay}
        </div>
    );
};

export default Eventspage;

