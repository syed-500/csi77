import ButtonGradient from "../../assets/svg/ButtonGradient";
import Hero from "./Hero";
import FacultySection from "./FacultySection";
import ContactForm from "./contact_form";
import ProgressBar from "react-scroll-progress-bar"; //Add this line to import the component
import EventsCard from "./Eventscard"

// min-[1500px]:ml-[200px] xl:ml-[20px] 
// ye wale ache hai dimensions 

const App = () => {
  return (
    <>
      <ProgressBar height="7" bgcolor="red" duration="0.2" marginLeft="100px"/>

      <div className=" flex flex-col align-center sm:w-full lg:ml-0 lg:bg-blue-800 sm:ml-[200px] md:ml-[100px] mt-[-100px]  md:align-center pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden  mx-auto md:bg-green-800 w-full  ">
        <Hero />
        <FacultySection/>
        <EventsCard/>
        <ContactForm/>
        
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

