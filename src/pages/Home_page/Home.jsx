import ButtonGradient from "../../assets/svg/ButtonGradient";
import Hero from "./Hero";
import FacultySection from "./FacultySection";
import ContactForm from "./contact_form";
import ProgressBar from "react-scroll-progress-bar"; //Add this line to import the component


const App = () => {
  return (
    <>
      <ProgressBar height="7" bgcolor="red" duration="0.2" marginLeft="100px"/>

      <div className=" xl:ml-40 align-center mt-[-100px] sm:mt-10 pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden mx-auto w-full max-w-[1200px] mr-[200px]">
        <Hero />
        <FacultySection/>
        <ContactForm/>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

