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
        <div className=" min-h-screen  py-12">
            <div className="events-text-content mb-12">
                <h2 className="text-4xl font-bold text-center ">Events</h2>
            </div>
            <div className='container mx-auto px-4 space-y-8'>
                {DataToDisplay}
            </div>
        </div>
    );
};

export default Eventspage;