import csilogo from "../assets/csilogo.webp"
import React from "react";
window.React = React;
import { socials } from "../constants/public_objects";

const Footer = () => {
  return (
    <footer className=" mb-10 w-full">
  {/* we are using our <Section> over here to like make a sort of section over here  */}
  {/* this is the footer section and will be there in all pages  */}
    {/* <Section crosses className="" > */}
    <div className="container  mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start px-4 sm:px-10 lg:px-20 " style={{borderTop:"2px solid gray"}}>
        <div className=" ml-10 mb-[-40px] sm:mb-[50px] mt-10 flex flex-col items-left justify-center font-mono gap-3 bold " >
            <img src={csilogo} width={100} height={100} alt="CSI Logo" className="mb-5"/>
            <div className="mb-3 ">
            <div className="flex flex-col justify-items-start items-center ">
          {/*  the details of the cc'ss */}
           <div className="flex flex-col mr-7 "> 
            <p className="mb-3 md:mr-52" >Student Co-ordinators Contacts</p>
              <div className="flex flex-col lg:pr-16 justify-items-start items-center gap-3 w-[350px] sm:w-[400px]  ">
                  <p className='pr-[70px]'><span><img src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF" className="w-4 text-4xl h-4 inline-block" alt="" /></span>Rasheed: +91 83280 05075</p>
                  <p className='pr-[70px]'><span><img src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF" className="w-4 text-4xl h-4 inline-block " alt="" /></span>Taufeeq: +91 72078 80860</p>
                  <p className='ml-[-90px] sm:mr-4'><span><img src="https://img.icons8.com/?size=100&id=53435&format=png&color=FFFFFF" className="w-4  text-4xl  h-4 inline-block mr-3" alt="" /></span>csi@mjcollege.ac.in</p>
              </div>
            </div>  
            </div>
            </div>
            <p className="w-[340px] leading-6 text-md">Mount Pleasant, 8-2-249, Rd Number 3, Venkateshwara Hills, Banjara Hills, Hyderabad, Telangana 500034</p>
        </div>
        {/* this is the I card wala part  */}
      <div className="mt-10 lg:pr-20 g-slate-500 opacity-70 z-1 lg:mr-56 ">
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6562222444213!2d78.44033307489522!3d17.42827810162643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cd7708dfd7%3A0x77482b7aa8b696f3!2sMuffakham%20Jah%20College%20of%20Engineering%20%26%20Technology%20(MJCET)!5e0!3m2!1sen!2sin!4v1716881145691!5m2!1sen!2sin"
          className="m-10 rounded-lg w-[320px] h-[250px] sm:w-[450px] sm:h-[250px] z-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0  w-[320px] h-[250px]  sm:w-[450px] sm:h-[250px] ml-10 opacity-50 rounded-lg pointer-events-none"></div>
      </div>
      </div>
    </div>

{/* sabse neeche wala part */}
    <div className="flex align-middle flex-col sm:flex-row flex-wrap justify-between px-[70px] sm:px-[150px]  ">

      

      <ul className="flex gap-5 mb-3 align-top ">
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex color-white items-center justify-center w-10 h-10 bg-zinc-900 rounded-full transition-colors hover:bg-n-6"
            >
            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
          </a>
        ))}
      </ul>

      <p className=" text-sm  font-mono text-n-2 lg:block mt-2">
            Made with ❤️ by Team CSI
      </p>
      </div>
      
    {/* </Section> */}
    </footer>
  );
};

export default Footer;