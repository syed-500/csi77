import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import FacultySection from "./components/FacultySection";
import { ChakraProvider } from "@chakra-ui/react";
import Gallery from "./components/lightGallery";
import ContactForm from "./components/contact_form";
import ProgressBar from "react-scroll-progress-bar"; //Add this line to import the component


const App = () => {
  return (
    <>
      <ProgressBar height="7" bgcolor="red" duration="0.2" marginLeft="100px"/>

      <div className="align-center sm:mt-10 pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden mx-auto w-full max-w-[1200px]">
        {/* <Header /> */}

        <Hero />

        <FacultySection/>
        {/* <Gallery/> */}
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
        <ContactForm/>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

