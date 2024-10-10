import Section from "./Section";
import Heading from "./Heading"
import sridevi from '../assets/team/sridevimam.jpg'
import shab from '../assets/team/shabbeersir.jpg'
import man from '../assets/team/manizamam.jpg'
import pic1 from "../assets/services/Zain-sir.jpeg"
import {
  Gradient,
} from "./design/Services";
import Card from "./FacultyCard2";

const FacultySection = () => {
  return (
    <Section className="pt-10 " >
      <div className="container " id="faculty1">
        {/* Heading */}
        <Heading
          title="Meet Our Faculty-Coordinator"
          text="Proudly managing the club for past 10 years"
        />
        {/* Box */}
        <div className="pt-10 w-[30rem] mx-auto relative z-1 flex items-center h-[32rem] mb-5  border border-[#50ffaf] rounded-3xl overflow-hidden lg:p-20 xl:h-[36rem] bg-[#1e413196]" style={{ display: "flex", justifyContent: "space-between", alignItems: "center",flexDirection:'column' }}>
          <img
            className="rounded-3xl mx-auto mt-0"
            width={350}
            alt="S"
            height={400}
            src={pic1}
          />
          <div className=" max-w-[40rem] mx-auto mt-[30px] " >
            <h4 className=" text-xl sm:text-base  text-center md:text-2xl ">Mr. Zainuddin Naveed</h4>
            <p className="body-2 mb-[3rem] text-n-3 ">
              Proffessor, Dept of CS </p>
          </div>
        </div>
      </div>
      
      <Gradient />
      <div className="flex flex-col sm:flex-row mb-[-200px]"  >
  <Card id="s1"image={shab}   title="Dr. Syed Shabbeer Ahmad" 
  text="
  Professor,Dept. Of CSE"/>
  <Card id="s1"image={man}   title="Dr. Maniza Hijab" 
  text="
  Professor,Dept. Of CSE"/>
  <Card id="s1" image={sridevi}   title="Dr. K. Sridevi" 
  text="
  Professor,Dept. Of CSE"/>

  </div>
      </Section>
  );
};

export default FacultySection;
