import Section from "../../components/Section";
import Heading from "../../components/Heading"
import sridevi from '../../assets/team/sridevimam.jpg'
import shab from '../../assets/team/shabbeersir.jpg'
import man from '../../assets/team/manizamam.jpg'
import pic1 from "../../assets/services/Zain-sir.jpeg"
import {
  Gradient,
} from "../../components/design/Services";
import Card from "../../components/FacultyCard2";

const FacultySection = () => {
  return (
    <Section className="pt-10 " >
    <>
      <div className="mt-10 w-screen flex flex-col align-center justify-center" id="faculty1">
        {/* Heading */}
        <Heading
          className = ""
          title="Meet Our Faculty-Coordinator"
          text="Proudly managing the club for past 10 years"
        />
        {/* Box */}
        <div className=" pt-10 sm:w-[30rem] mx-auto relative z-1 flex items-center h-[32rem] mb-5  border border-[#50ffaf] rounded-3xl overflow-hidden lg:p-20 xl:h-[36rem] bg-[#1e413196]" style={{ display: "flex", justifyContent: "space-between", alignItems: "center",flexDirection:'column' }}>
          <img
            className="rounded-3xl mx-auto mt-0 w-[350px] h-[400px] "
            alt="S"
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
  </>
  </Section>
  );
};

export default FacultySection;
