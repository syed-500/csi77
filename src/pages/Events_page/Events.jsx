
import Content from './cards';
// import Cards from '../components/EvCards';
// import displayData from '../components/Data1';

const Eventspage = () => {
    

    return (
        <div className=" mt-32 font-mono ">
           <div >
                <h2 className="font-light text-center mt-2 text-[50px] lg:text-[75px]">Events</h2>
                    <div className='pt-10 flex flex-col gap-[60px] justify-center items-center mt-10 w-screen '>
                        
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

