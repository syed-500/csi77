import { curve} from "../../assets";
import Section from "../../components/Section";
import {  BottomLine, Gradient } from "../../components/design/Hero";
import { heroIcons } from "../../constants/public_objects";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../../components/Generating";
import Notification from "../../components/Notification";
import csiimg from '../../assets/bg.jpg'
import Counter from "../../components/Counter";
import  '../../css/join.scss'
const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* welcome to csi */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] " >
          <h1 className="h1 mb-6" >
            Welcome to CSI MJCET,
            <br></br>
            Where&nbsp;Tech Meets&nbsp;  {` `}
            <span className="inline-block relative">
              Innovation{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-3 max-w-3xl mx-auto mb-8  text-rose-200 text-n-2 lg:mb-8">
            Connect to a vibrant community of tech enthusiasts,
            fostering innovation, collaboration,
            and skill development for a dynamic digital future.
          </p>
          {/* <Button href="/pricing" white>
            Join Our Team
          </Button> */}
          <div className="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ShineHover className="bg-gray-700"/>
          </div>
          
        </div>

        {/* bg-image */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 bg-n-8">
          <div className="relative z-1 p-0.5 rounded-2xl bg-radial bg-n-8">
            <div className="relative bg-n-6 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-6 rounded-t-[0.7rem]" />

              <div className=" rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* <img
                  src={robot}
                  className="w-full scale-[1.0] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                /> */}
                <video className=" w-full h-full  rounded-lg" controls autoPlay loop muted >
                  <source src="/hh3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[16rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="NEW EVENT UPCOMING"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[200%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={csiimg}
              className="w-full"
              width={1440}
              height={1800}
              style={{ opacity: "0.40" }}
              alt="hero"
            />
            {/* <video className="h-full w-full rounded-lg" controls autoPlay loop muted>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
          </div>

        </div>

        {/* Counter */}
        <div className="numbers text-white px-[35px] py-[20px] mt-10 " style={{ display: "flex", flexDirection: "row", backgroundColor: "#9393b5", borderRadius: "40px", justifyContent: "space-between",   fontWeight: "bold",

background: "linear-gradient(90deg, rgba(115,0,255,1) 0%, rgba(119,6,170,1) 7%, rgba(121,9,120,1) 17%, rgba(121,9,120,1) 27%, rgba(89,7,98,1) 52%, rgba(0,2,36,1) 99%)"}}>
          <Counter number={120} title="Members" />
          <Counter number={1200} title="Projects" />
          <Counter number={10} title="Years" />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
function ShineHover() {
  return (
    <main id="join-button" >
      <div className="container">
        <a className="icon" href="https://forms.gle/tWEiGsP855cgqUjw8">
          <a className="" href="https://forms.gle/tWEiGsP855cgqUjw8">JOIN OUR TEAM</a>
        </a>
      </div>
    </main>
  )
}