
import Header from '../components/Header';
import Content from '../components/cards';
// import Cards from '../components/EvCards';
// import displayData from '../components/Data1';
import '../css/events.css';
const Eventspage = () => {
    

    return (
        <div className="eventsmain font-mono">
            <Header />
            <div className="events-text-content">
                <h2>Events</h2>
                    <div className='pt-10 flex flex-col gap-4 justify-center items-center mt-10 w-screen '>
                        
                            {/* this is one card of the events  */}
                            
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                        {/* <div className='w-1/2 bg-red-500 '>
                                dfhjbfs
                        </div>   */}
                    </div>
            </div>
            
        </div>
    );
};

export default Eventspage;

